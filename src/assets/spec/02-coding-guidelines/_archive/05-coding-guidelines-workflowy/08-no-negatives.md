# No Raw Negations — Use Positive Guard Functions

> **Version:** 4.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Principle

**Never use raw negation operators (`!`) on function calls or existence checks in conditions.** Instead, wrap every negative check in a **positively named utility function** that reads as a single intent.

---

## The Rule

| ❌ Forbidden | ✅ Required | Why |
|-------------|------------|-----|
| `!response.ok` | `isResponseFailed(response)` | Positive name; no `!` to overlook |
| `!arr.includes(x)` | `isMissing(arr, x)` | Named guard |
| `!isDefined(val)` | `isUndefined(val)` | Semantic inverse |
| `!obj.isActive()` | `obj.isDisabled()` | Semantic inverse on object |
| `!fs.existsSync(path)` | `isFileMissing(path)` | No raw filesystem calls |

### Key: Every negative check becomes a **positively named function**

The function name must express the **positive assertion**:
- "is missing" not "is not existing"
- "is disabled" not "is not active"
- "is empty" not "is not filled"

---

## Examples

```typescript
// ❌ FORBIDDEN: Raw negation
if (!response.ok) {
    handleError(response);
}

if (!array.includes(item)) {
    array.push(item);
}

// ✅ REQUIRED: Positive guard function
if (isResponseFailed(response)) {
    handleError(response);
}

if (isItemMissing(array, item)) {
    array.push(item);
}
```

**Utility location:** `src/utils/guards.ts` or domain-specific guard files

| Guard Function | Replaces |
|---------------|----------|
| `isResponseFailed(res)` | `!res.ok` |
| `isResponseSuccess(res)` | `res.ok` |
| `isArrayEmpty(arr)` | `!arr.length` or `arr.length === 0` |
| `hasItems(arr)` | `arr.length > 0` |
| `isNullish(val)` | `val == null` |
| `isDefined(val)` | `val != null` (type-narrows to `T`) |
| `isPresent(val)` | `val != null` |
| `isUndefined(val)` | `val === undefined` |
| `isEmpty(val)` | `val == null` |
| `isStringEmpty(str)` | `!str` or `str === ''` |
| `hasContent(str)` | `!!str` or `str.length > 0` |
| `isDefinedAndValid(val)` | `val != null && val.isValid()` |
| `isFileMissing(path)` | `!fs.existsSync(path)` |
| `isFileExists(path)` | `fs.existsSync(path)` |

---

## No Raw Filesystem / System Calls

Application code **must not** call raw filesystem functions (`fs.existsSync`, `fs.readFileSync`) directly in conditions. Use wrapper utilities that provide positive-named boolean helpers.

```typescript
// ❌ FORBIDDEN — raw fs call
if (fs.existsSync(path)) { ... }

// ✅ REQUIRED — pathUtil wrapper
const isFilePresent = pathUtil.isFile(path);

if (isFilePresent) { ... }
```

---

## Object-Level Semantic Inverses

Every boolean method on an object **must have a semantic inverse**.

```typescript
// ❌ FORBIDDEN
if (!plugin.isActive()) { ... }
if (!user.hasPermission('admin')) { ... }

// ✅ REQUIRED
if (plugin.isDisabled()) { ... }
if (user.lacksPermission('admin')) { ... }
```

---

## When Raw `!` Is Still Acceptable

1. **Simple boolean variable checks** where the variable is already a positively named `is`/`has` boolean:
   ```typescript
   if (!isInitialized) { ... }  // ✅ OK — variable is already semantic
   ```

2. **Logical operators in extracted named booleans** (inside the variable definition, not at the call site):
   ```typescript
   const isInvalid = !isValid && !hasOverride;  // ✅ OK — inside named boolean
   if (isInvalid) { ... }                        // ✅ Call site is clean
   ```

3. **Native type coercion** where no function exists:
   ```typescript
   if (!value) { ... }  // ✅ OK — simple falsy check on primitive
   ```

---

## Checklist Summary (Copy for PRs)

```
[ ] No `!response.ok` — use `isResponseFailed(response)`
[ ] No `!array.includes()` — use guard function
[ ] No `!obj.isActive()` — use `obj.isDisabled()` / semantic inverse
[ ] No raw filesystem calls in conditions — use wrapper utilities
[ ] Guard functions live in dedicated utility files
[ ] Every boolean method on objects has a semantic inverse
[ ] No mixed-polarity conditions — extract to a named boolean (see P6)
```

---

## Cross-References

- [Boolean Principles](./02-boolean-principles.md) — P3, P6, and P8
- [Code Style](./03-code-style.md) — Braces, nesting, spacing
- [Master Coding Guidelines](./00-master-coding-guidelines.md) — Consolidated reference

---

*No-negatives specification v4.0.0 — 2026-03-30*
