# Codebase Type Safety Remediation Plan

> **Version:** 1.0.0  
> **Updated:** 2026-03-31  
> **Created:** 2026-02-12  
> **Priority:** CRITICAL  
> **Spec Reference:** `sp./11-typescript-standards.md` v3.2.0  
> **Goal:** Eliminate all `any`, untyped `unknown`, `Record<string, unknown>` in API signatures, and magic strings/numbers

---

## Audit Summary

| Category | Count | Severity |
|----------|-------|----------|
| `catch (err: any)` | 11 | 🔴 Critical |
| `as any` type assertions | 5 | 🔴 Critical |
| `getQueryData<any>` | 1 | 🔴 Critical |
| `unknown` in API method signatures | 18 | 🔴 Critical |
| `Record<string, unknown>` in API params/returns | 14 | 🔴 Critical |
| `request<unknown>` (untyped endpoints) | 8 | 🟡 High |
| `unknown` in envelope/client internals | 6 | 🟢 Acceptable (parse boundaries) |
| Magic strings (status checks, action types) | ~50+ | 🟡 High |
| Magic numbers (staleTime, limits, intervals) | ~20+ | 🟡 High |

**Total violations: ~130+**

---

## Phase 1: API Type Definitions (Priority: 🔴 CRITICAL)

Create specific interfaces to replace `Record<string, unknown>` and `unknown` in `src/lib/api/`.

### P1.1 — Item operation types

**File:** `src/types/index.ts`

Create typed interfaces for all item CRUD operations, matching the data model in the frontend spec §7.

### P1.2 — Auth and user types

**File:** `src/types/index.ts`

Create:
```typescript
interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  plan: UserPlan;
  preferences: UserPreferences;
  createdAt: string;
}

type UserPlan = "free" | "pro";

interface UserPreferences {
  theme: "light" | "dark" | "system";
  defaultView: "list" | "board";
}
```

### P1.3 — Share and collaboration types

**File:** `src/types/index.ts`

Create:
```typescript
type SharePermission = "view" | "edit" | "admin";

interface ShareEntry {
  itemId: string;
  userId: string;
  email: string;
  permission: SharePermission;
  sharedAt: string;
}
```

### P1.4 — Update API method signatures

Replace all `Record<string, unknown>` params and `request<unknown>` calls with the specific types from P1.1–P1.3.

---

## Phase 2: Eliminate `catch (err: any)` (Priority: 🔴 CRITICAL)

**Pattern:** Replace all occurrences with bare `catch (err)` + `instanceof` narrowing.

```typescript
// ❌ FORBIDDEN
catch (err: any) { toast.error(err.message); }

// ✅ REQUIRED
catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  toast.error(message);
}
```

---

## Phase 3: Eliminate `as any` Assertions (Priority: 🔴 CRITICAL)

Replace all `as any` type assertions with properly typed alternatives. Every instance must be replaced with a specific interface or type guard.

---

## Phase 4: Make Envelope Generic (Priority: 🟡 HIGH)

**File:** `src/lib/api/envelope.ts`

```typescript
// Current
export interface RawEnvelope {
  Results: unknown[];
}

// Target
export interface RawEnvelope<T = unknown> {
  Status: EnvelopeStatus;
  Attributes: EnvelopeAttributes;
  Results: T[];
  Navigation?: EnvelopeNavigation;
  Errors?: EnvelopeErrors;
}
```

The internal `unknown` for `Results` is acceptable since `parseEnvelope<T>` already provides the generic boundary. This is a parse-boundary exception.

---

## Phase 5: Constants & Enums for Magic Strings (Priority: 🟡 HIGH)

### P5.1 — Create `src/lib/constants.ts`

```typescript
// Item types
export const enum ItemTypeEnum {
  Bullet = "bullet",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  Paragraph = "paragraph",
  Todo = "todo",
  Numbered = "numbered",
  Board = "board",
  Dashboard = "dashboard",
  Quote = "quote",
  CodeBlock = "codeBlock",
  Divider = "divider",
}

// Save status
export const enum SaveStatusEnum {
  Idle = "idle",
  Saving = "saving",
  Saved = "saved",
  Error = "error",
}

// Timing constants
export const DEBOUNCE_SAVE_MS = 1_500 as const;
export const STALE_TIME_MS = 30_000 as const;
export const MAX_RETRY_ATTEMPTS = 3 as const;
export const TOAST_DURATION_ERROR_MS = 10_000 as const;
```

### P5.2 — Migrate all consumers

Search-and-replace all inline string comparisons with enum references.

---

## Phase 6: Activity & Metadata Typing (Priority: 🟡 HIGH)

Replace `metadata: Record<string, unknown>` with a discriminated union:

```typescript
type ActivityActionType =
  | "create"
  | "update"
  | "delete"
  | "move"
  | "share"
  | "complete"
  | "uncomplete"
  | "mirror"
  | "duplicate"
  | "restore"
  | "convertType";

interface ActivityLogEntry {
  id: string;
  userId: string;
  itemId: string | null;
  actionType: ActivityActionType;
  details: Record<string, string | number | boolean>;
  timestamp: string;
}
```

---

## Execution Order

| Priority | Phase | Effort | Dependencies |
|----------|-------|--------|--------------|
| 1 | P1 — API type definitions | Medium | None |
| 2 | P2 — Catch block fixes | Small | None |
| 3 | P3 — `as any` elimination | Small | P1 (some fixes need new types) |
| 4 | P5.1 — Constants file | Small | None |
| 5 | P1.4 — Update API methods | Medium | P1.1–P1.3 |
| 6 | P4 — Generic envelope | Small | None |
| 7 | P5.2 — Magic string migration | Large | P5.1 |
| 8 | P6 — Activity metadata | Medium | P5.1 |

---

## Verification

After each phase:
1. `tsc --noEmit` — zero type errors
2. Search for `\bany\b` in `src/` — zero matches (excluding comments with "any" as English word)
3. Search for `as any` — zero matches
4. Search for `catch.*any` — zero matches
5. Search for `Record<string, unknown>` in API signatures — zero matches

---

*Remediation plan v2.0.0 — 2026-03-30*
