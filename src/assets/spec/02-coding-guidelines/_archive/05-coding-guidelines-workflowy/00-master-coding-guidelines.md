# Master Coding Guidelines — TypeScript Enforcement Reference

> **Version:** 3.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React — all code in this project
> **Purpose:** Single source of truth for any developer or AI to produce standards-compliant code

---

## How to Use This Document

This is the **master reference**. Every rule here is enforced across all TypeScript code. Detailed references:
- [TypeScript Standards](./11-typescript-standards.md)
- [Database Naming](./05-database-naming.md)
- [Boolean Principles](./02-boolean-principles.md)
- [No-Negatives](./08-no-negatives.md)

---

## 1. Naming Conventions

### 1.1 — Universal Rules

| Element | Convention | Example |
|---------|-----------|--------|
| Component | PascalCase | `SnapshotManager` |
| Interface / Type | PascalCase | `UserProfile`, `ApiResponse` |
| Enum type name | PascalCase + `Type` suffix | `StatusType` |
| Enum case | PascalCase | `StatusType.Success` |
| Function / method | camelCase | `processUpload()` |
| Variable | camelCase | `pluginSlug` |
| Boolean variable | `is`/`has` + camelCase | `isActive`, `hasPermission` |
| File name (component) | PascalCase | `RemoteFileBrowser.tsx` |
| File name (utility) | camelCase | `apiClient.ts` |
| Abbreviations | First letter only caps | `postId`, `fileUrl` |
| JSON / API keys | PascalCase | `"PluginSlug"`, `"CreatedAt"` |
| Database tables | PascalCase (quoted) | `"UserProfiles"`, `"AgentSites"` |
| Database columns | PascalCase (quoted) | `"PluginSlug"`, `"CreatedAt"` |

### 1.2 — Abbreviation Standard

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| `ID` | `Id` |
| `URL` | `Url` |
| `JSON` | `Json` |
| `API` | `Api` |
| `SQL` | `Sql` |
| `HTTP` | `Http` |
| `HTML` | `Html` |
| `CSS` | `Css` |
| `DB` | `Db` |

### 1.3 — Zero Underscore Policy

**Snake_case is prohibited** for all logic-level identifiers. This includes:
- Variables, method names, properties, parameters
- Internal object keys used in code logic

**Exemptions** (persistence-level only):
- HTML form `name` attributes and URL query parameters
- Third-party API response keys

> **Note:** Database columns use PascalCase in this project — no snake_case exemption for DB.

---

## 2. Database Naming — PascalCase

> Full reference: [database-naming.md](./05-database-naming.md)

All custom database tables and columns use **PascalCase** with double-quoted identifiers in SQLite. No exceptions.

| Element | Convention | Example |
|---------|-----------|---------|
| Table names | PascalCase | `"UserProfiles"`, `"AgentSites"` |
| Column names | PascalCase | `"PluginSlug"`, `"CreatedAt"` |
| Index names | `Idx` prefix + PascalCase | `"IdxUserProfiles_CreatedAt"` |
| TypeScript interface | PascalCase | `Id`, `PluginSlug`, `CreatedAt` |

---

## 3. Boolean Standards — Positive Logic

> Full reference: [boolean-principles.md](./02-boolean-principles.md) and [no-negatives.md](./08-no-negatives.md)

### 8 Non-Negotiable Principles

| # | Principle | Rule |
|---|-----------|------|
| P1 | `is`/`has` prefix | Every boolean must start with `is` or `has` |
| P2 | No negative words | `not`, `no`, `non` are banned from boolean names |
| P3 | Named guards | Never use `!` on function calls — use semantic inverse |
| P4 | Max two conditions | Max 2 operands per `&&`/`||` expression — decompose 3+ |
| P5 | No boolean parameters | Use separate named methods or options objects |
| P6 | No mixed polarity | Never combine negative + positive in one expression |
| P7 | No inline statements | No assignments inside `if`/`while` conditions |
| P8 | Positive null guards | Use `isDefined(x)` / `isDefinedAndValid(x)` |

### Common Mistakes

```typescript
// ❌ P1 violation: Missing prefix
const active = true;
const loaded = false;

// ✅ CORRECT
const isActive = true;
const isLoaded = false;
```

```typescript
// ❌ P3 violation: Raw negation on function call
if (!response.ok) { handleError(response); }

// ✅ CORRECT: Semantic inverse / guard function
if (isResponseFailed(response)) { handleError(response); }
```

### `isDefined` / `isDefinedAndValid` Guards

```typescript
// ❌ FORBIDDEN: Raw null/undefined checks
if (config !== null && config !== undefined) { ... }

// ✅ REQUIRED: Type-narrowing guard
if (isDefined(config)) { ... }
```

---

## 4. Enum Standards — TypeScript

| Rule | Detail |
|------|--------|
| Type suffix | `StatusType`, `ActionType` — always `Type` suffix |
| Values | String-backed with PascalCase values |
| Usage | Use enum members, never raw string literals |

### Common Mistakes

```typescript
// ❌ MISTAKE: Magic string instead of enum
if (status === 'success') { ... }

// ✅ CORRECT: Use enum
if (status === StatusType.Success) { ... }
```

---

## 5. Code Style — Formatting Rules

> Full reference: [code-style.md](./03-code-style.md)

| Rule | Description |
|------|-------------|
| R1 | Always use braces — no single-line `if` |
| R2 | Zero nested `if` — absolute ban |
| R3a | Max two conditions per `&&`/`||` expression — decompose 3+ |
| R3b | Never mix negative + positive in one expression |
| R3c | Extract multi-part conditions into named booleans |
| R4 | Blank line before `return`/`throw` when preceded by statements |
| R5 | Blank line after `}` when followed by more code |
| R6 | Max 15 lines per function body (error-handling lines exempt) |
| R7 | Zero nested `if` reinforcement |
| R9a | Function signatures >2 params → one per line with trailing comma |
| R9b | Function calls >2 args → one per line |
| R9c | Array/object literals >2 items → one per line |
| R10 | Blank line before control structures when preceded by assignments |
| R11 | Method chaining — each `.method()` on its own line (>2 calls) |
| R12 | No empty line after opening brace |
| R13 | No empty line at start of file |

---

## 6. Error Handling

- Use `try/catch` with proper error typing
- Never swallow errors silently — always log or propagate
- Use typed error responses with structured error codes

### Result Guard Rule (Zero Silent Failures)

Every Result wrapper **MUST** have its error state checked before accessing the contained value.

```typescript
// ❌ WRONG: No guard — error silently swallowed
const { data } = await db.from('UserProfiles').select();
processData(data); // data could be null if error

// ✅ CORRECT: Guard before access
const { data, error } = await db.from('UserProfiles').select();

if (error) {
    console.error('Query failed:', error.message);

    return;
}

processData(data);
```

---

## 7. Type Safety

- `any` is **prohibited** everywhere (see [TypeScript Standards](./11-typescript-standards.md))
- `unknown` only at parse boundaries with immediate narrowing
- All function signatures must have explicit parameter and return types
- No redundant JSDoc when TypeScript types are present

---

## 8. Magic Strings — Zero Tolerance

All repeated strings must be captured in enums or typed constants:

| Category | Solution |
|----------|---------|
| Route paths | Route constants or enum |
| Error codes | `ErrorType` enum |
| Status values | `StatusType` enum |
| API endpoints | Centralized constants |
| Event names | Event type enum |

---

## 9. File & Function Organization

### 9.0 — File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `UserProfile.tsx`, `ErrorModal.tsx` |
| Hooks | camelCase with `use` prefix | `useApiQuery.ts` |
| Utilities | camelCase | `apiClient.ts`, `formatDate.ts` |
| Types | camelCase or PascalCase | `types.ts`, `ApiTypes.ts` |
| Constants | camelCase | `routes.ts`, `config.ts` |
| Test files | Same name + `.test` | `UserProfile.test.tsx` |

### 9.1 — File Size Limits

No single file should exceed **300 lines**. When it does, decompose.

### 9.2 — Function Size

- Function body: max **15 lines** (excluding blank lines, comments, and error-handling lines)
- If exceeded, extract into smaller helper functions

---

## 10. Parameter Count Rule

Functions must accept **3 or fewer** parameters. When more are needed, group them into a typed object.

```typescript
// ❌ FORBIDDEN
function createUser(name: string, email: string, role: string, department: string): User { ... }

// ✅ REQUIRED
interface CreateUserParams {
    name: string;
    email: string;
    role: string;
    department: string;
}
function createUser(params: CreateUserParams): User { ... }
```

---

## Quick Checklist for Any Code Change

```
[ ] Naming: camelCase variables, PascalCase components/types/enums
[ ] DB: PascalCase tables/columns with double-quoted identifiers
[ ] Abbreviations: Id (not ID), Url (not URL), Json (not JSON), Api (not API)
[ ] Null guards: isDefined()/isDefinedAndValid() — never raw != null
[ ] Booleans: is/has prefix, no negative words, no raw ! on calls
[ ] No inline statements in conditions — separate assignment from check
[ ] Enums: Type suffix, PascalCase case names, no magic strings
[ ] Formatting: braces always, zero nesting, blank before return, 15-line max
[ ] Method chaining: each call on its own line (>2 calls)
[ ] No empty line after opening brace or at start of file
[ ] Errors: always check error state before accessing data
[ ] Types: no any, explicit parameter and return types, no redundant JSDoc
[ ] Max 3 params: use options objects for 4+
[ ] Max 300 lines per file, 15 lines per function body (error lines exempt)
```

---

*Master coding guidelines v3.0.0 — 2026-03-30*
