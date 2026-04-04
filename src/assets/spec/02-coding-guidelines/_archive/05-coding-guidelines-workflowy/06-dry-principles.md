# DRY Principles — Coding Guidelines

> **Version:** 2.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Core Principle

**Don't Repeat Yourself (DRY):** Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

---

## Rules

### 1. Single Source of Truth

Every concept, constant, type, or configuration must be defined in exactly one place.

| What | Where | Anti-pattern |
|------|-------|--------------|
| API endpoint paths | Centralized constants file | Hardcoded strings in components |
| Response types | Shared type definitions | Independent type definitions that drift |
| Error codes | Centralized constants file | Magic numbers in business logic |
| Feature flags | Config file or database | Scattered `if` checks with hardcoded booleans |

### 2. Extract, Don't Copy

When you find yourself writing the same logic a second time, **extract it immediately**.

**Extraction targets:**
- **3+ lines** of identical logic → Extract to function
- **2+ components** sharing state logic → Extract to custom hook
- **2+ pages** sharing validation → Extract to shared validator

### 3. Composition Over Inheritance

```typescript
// ✅ Composition: useApiQuery wraps useQuery + error handling
const { data } = useApiQuery<Plugin[]>('/plugins', ['plugins']);

// ❌ Inheritance: extending a BaseComponent for each entity
class PluginsPage extends DataFetchingComponent { ... }
```

### 4. Factory Patterns for Repetitive Structures

```typescript
// ✅ Factory hook — one definition, many consumers
export function useApiQuery<T>(endpoint: string, queryKey: string[]) { ... }

// ❌ Per-entity hooks with duplicated useQuery + error handling
export function usePlugins() { const { data } = useQuery(...); /* error handling */ }
export function useSites() { const { data } = useQuery(...); /* same error handling */ }
```

### 5. Modular Decomposition

No single file should exceed **300 lines**. When it does, decompose:

| Before | After |
|--------|-------|
| `ErrorModal.tsx` (800 lines) | `modal/BackendSection.tsx`, `modal/FrontendSection.tsx`, etc. |
| `api.ts` (600 lines) | `api/types.ts`, `api/client.ts`, `api/methods.ts` |

---

## How to Write DRY Code

### Before Writing New Code

1. **Search first** — Does this logic already exist somewhere?
2. **Check for patterns** — Are there similar implementations for other entities?
3. **Identify the abstraction** — What's the reusable part vs. the specific part?

### Red Flags

| Smell | Likely Violation |
|-------|-----------------|
| Same error handling in 3+ places | Missing centralized error handler |
| Same API call shape in 3+ hooks | Missing factory hook |
| Same constant string in 2+ files | Missing constants file |
| Same validation logic in 2+ forms | Missing shared validator |
| Copy-pasting a component and tweaking props | Missing variant or composition |

---

## Project-Specific DRY Patterns

| Pattern | Implementation | Location |
|---------|---------------|----------|
| API data fetching | `useApiQuery` / `useApiQueryPaginated` | `src/hooks/useApiQuery.ts` |
| Error reporting | Global error store | `src/stores/errorStore.ts` |
| Envelope parsing | `parseEnvelope` utility | `src/lib/api/envelope.ts` |

---

## Cross-References

- [Response Envelope Schema](../05-error-manage/response-envelope/envelope.schema.json) — Type contract
- [TypeScript Standards](./11-typescript-standards.md) — TS-specific rules

---

*DRY principles specification v2.0.0 — 2026-03-30*
