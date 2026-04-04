# Strict Typing — TypeScript Type Declaration Rules

> **Version:** 2.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Rule

Every function parameter, return value, and class property **must** have an explicit type declaration. Untyped signatures are forbidden.

---

## TypeScript Enforcement

Enforced by `strict: true` in tsconfig. Key reinforcements:

- `any` is **prohibited** everywhere (see [TypeScript Standards](./11-typescript-standards.md))
- `unknown` only at parse boundaries with immediate narrowing
- All function signatures must have explicit parameter and return types

### Examples

```typescript
// ❌ FORBIDDEN: Untyped parameters and return
function processData(data, options) { ... }

// ✅ REQUIRED: Fully typed
function processData(data: PluginData[], options: ProcessOptions): ProcessResult { ... }
```

```typescript
// ❌ FORBIDDEN: any
function formatError(error: any): any { ... }

// ✅ REQUIRED: Concrete types
function formatError(error: AppError): ErrorDisplay { ... }
```

---

## Docblock Rules

### Rule: Remove redundant JSDoc when TypeScript types are present

```typescript
// ❌ FORBIDDEN: JSDoc duplicating TypeScript types
/**
 * @param message - The error message
 * @returns The formatted string
 */
function formatError(message: string): string { ... }

// ✅ REQUIRED: No redundant JSDoc
function formatError(message: string): string { ... }
```

### When to Keep JSDoc

| Condition | Keep JSDoc? |
|-----------|-------------|
| Function body > 10 lines | ✅ Keep a summary comment |
| Complex behavior or side effects | ✅ Describe semantics |
| Non-obvious constraints (e.g., "must be positive") | ✅ Document constraint |
| Parameter type already in signature, no extra semantics | ❌ Remove |

---

## Parameter Count Rule

### Rule: Maximum 3 parameters per function

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

## Result Guard Rule (Zero Silent Failures)

Every async operation **MUST** have its error state checked before accessing the result.

```typescript
// ❌ WRONG: No guard — error silently swallowed
const { data } = await db.from('Users').select();
processData(data);

// ✅ CORRECT: Guard before access
const { data, error } = await db.from('Users').select();

if (error) {
    console.error('Query failed:', error.message);

    return;
}

processData(data);
```

### Enforcement Checklist

- [ ] Every database query checks `error` before using `data`
- [ ] Every `fetch` call checks `response.ok` or uses a guard function
- [ ] No error is silently discarded — all errors are logged or propagated
- [ ] Promise rejections are always caught

---

## Cross-References

- [TypeScript Standards](./11-typescript-standards.md) — Full TS rules
- [Function Naming](./07-function-naming.md) — No boolean flag parameters
- [Master Guidelines](./00-master-coding-guidelines.md) — Consolidated reference

---

*Strict typing specification v2.0.0 — 2026-03-30*
