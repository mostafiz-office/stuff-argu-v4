# Boolean Principles — TypeScript

> **Version:** 4.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Overview

Boolean variables, parameters, return values, and method names are the most frequently read tokens in any codebase. Poorly named booleans silently degrade readability, cause logic bugs, and increase cognitive load during code review. This spec defines **eight non-negotiable principles**.

---

## Principle 1: Always Use `is` or `has` Prefixes

Every boolean identifier — variable, property, parameter, or method — **must** start with `is` or `has`.

```typescript
// ❌ FORBIDDEN
const loading = true;
const valid = false;
const overdue = checkOverdue();

// ✅ REQUIRED
const isLoading = true;
const isValid = false;
const hasOverdue = checkOverdue();
```

### Method Names Follow the Same Rule

```typescript
// ❌ FORBIDDEN
order.overdue();
user.admin();

// ✅ REQUIRED
order.hasOverdue();
user.isAdmin();
```

---

## Principle 2: Never Use Negative Words in Boolean Names

The words **`not`**, **`no`**, and **`non`** are **absolutely banned** from boolean names. Use a **positive semantic synonym** instead.

| ❌ Forbidden Name | ✅ Required Name | Semantic Meaning |
|---|---|---|
| `isNotReady` | `isPending` | The order is waiting |
| `isNotInList` | `isAbsentFromList` | The item is absent |
| `isNotBlocked` | `isActive` | The entity is active |
| `hasNoPermission` | `isUnauthorized` | The user lacks access |

```typescript
// ❌ FORBIDDEN — "not" in the variable name
const isNotReady = order.status !== 'ready';

// ✅ REQUIRED — Positive semantic synonym
const isPending = order.status !== 'ready';
```

---

## Principle 3: Replace Raw Negation With Named Guards

Never use raw `!` on function calls or existence checks at call sites. Instead, wrap every negative check in a **positively named utility function**.

```typescript
// ❌ FORBIDDEN
if (!isDefined(value)) {
    return;
}

// ✅ REQUIRED — Use a positive guard
if (isUndefined(value)) {
    return;
}
```

```typescript
// ❌ FORBIDDEN
if (!response.ok) {
    handleError(response);
}

// ✅ REQUIRED
if (isResponseFailed(response)) {
    handleError(response);
}
```

For the full guard function inventory, see [no-negatives.md](./08-no-negatives.md).

---

## Principle 4: Maximum Two Conditions Per Expression

A single boolean expression may combine **at most two** operands with `&&` or `||`. Three or more operands **must** be decomposed into intermediate named booleans. This also means: never combine a negative check with a positive check in the same expression (see P6).

```typescript
// ❌ FORBIDDEN: Three conditions chained + negative mixed with positive
const isDelegatedError =
    response != null &&
    response.status >= 400 &&
    response.data?.code?.startsWith('E8');

// ✅ REQUIRED: Decompose — max two conditions per step, no mixed polarity
if (isUndefined(response)) {
    return;
}

const isErrorStatus = response.status >= 400;
const isDelegatedError = isErrorStatus && response.data?.code?.startsWith('E8');

if (isDelegatedError) {
    showDelegatedError(response);
}
```

### Single-Condition Assignments Stay on One Line

```typescript
// ✅ OK: Single condition — one line
const isRuntime = fn.startsWith('runtime.');
const isMain = fn === 'runtime.main';
```

---

## Principle 5: Boolean Parameters Must Be Explicit

Never use bare `true`/`false` at call sites. Use separate named methods or an options object.

```typescript
// ❌ FORBIDDEN — What does `true` mean here?
fetchData(userId, true);

// ✅ REQUIRED — Option A: Named functions
fetchDataWithCache(userId);
fetchDataWithoutCache(userId);

// ✅ REQUIRED — Option B: Options object
fetchData(userId, { isUseCache: true });
```

See also: [function-naming.md](./07-function-naming.md)

---

## Principle 6: Never Mix Positive and Negative Booleans in a Single Condition

Combining a positive boolean with a negated boolean in the same expression (e.g., `isX && !isY`) is **forbidden**. This also applies to mixing a null/undefined guard with a positive check. Extract the negative part into a separate guard or named boolean first.

```typescript
// ❌ FORBIDDEN — Mixed polarity
if (isLoggedIn && !hasPermission) {
    redirect('/unauthorized');
}

// ✅ REQUIRED — Guard the negative first, then use positive only
if (isPermissionMissing) {
    redirect('/unauthorized');
}
```

```typescript
// ❌ FORBIDDEN — Null guard (negative) mixed with positive
const isReady = response != null && response.status === 200;

// ✅ REQUIRED — Separate the null guard
if (isUndefined(response)) {
    return;
}

const isReady = response.status === 200;
```

---

## Principle 7: No Inline Statements in Conditions

Inline variable assignment inside `if`/`while` conditions is **prohibited**. This pattern hides computation inside control flow and makes debugging harder.

```typescript
// ❌ FORBIDDEN — assignment expression in condition
let match;
if ((match = regex.exec(input)) !== null) {
    process(match);
}

// ✅ REQUIRED — separate assignment
const match = regex.exec(input);
const isMatchFound = match !== null;

if (isMatchFound) {
    process(match);
}
```

---

## Principle 8: `isDefined` / `isDefinedAndValid` — Positive Null/Existence Guards

Raw `!== null` / `!== undefined` combined with validity checks creates cognitive overhead. Use positive guard functions that express intent as a single word.

### Guard Table

| Guard | Replaces | TypeScript |
|-------|----------|------------|
| **isDefined** | `!= null` | `isDefined(x)` — type-narrows to `T` |
| **isDefinedAndValid** | `!= null && isValid()` | `isDefinedAndValid(x)` |
| **isEmpty** | `== null` | `isEmpty(x)` |
| **isNullish** | `== null` | `isNullish(x)` |

### Examples

```typescript
// ❌ FORBIDDEN: Raw null/undefined checks
if (config !== null && config !== undefined) {
    applyConfig(config);
}

// ✅ REQUIRED: Type-narrowing guard function
if (isDefined(config)) {
    applyConfig(config); // TypeScript narrows to Config
}
```

```typescript
// ❌ FORBIDDEN: Compound null + validity
if (config != null && config.isValid()) {
    applyConfig(config);
}

// ✅ REQUIRED: Single positive guard
if (isDefinedAndValid(config)) {
    applyConfig(config);
}
```

---

## Quick Reference

| ❌ Forbidden | ✅ Required | Principle |
|-------------|------------|-----------|
| `loading` | `isLoading` | P1: `is`/`has` prefix |
| `valid` | `isValid` | P1: `is`/`has` prefix |
| `isNotReady` | `isPending` | P2: No negative words |
| `!response.ok` | `isResponseFailed(response)` | P3: Named guards |
| `a && b && c` | Decompose into 2-condition steps | P4: Max two conditions |
| `fn(true)` | `fnWithOption()` | P5: Explicit params |
| `isDefined(x) && x.isOk()` | Guard first, then positive | P6: No mixed polarity |
| `if ((m = re.exec(s)))` | `const m = re.exec(s)` | P7: No inline statements |
| `x !== null && x !== undefined` | `isDefined(x)` | P8: Positive guards |

---

## Static Factory Constructor Exemption

Methods like `Result.empty()` are **static factory constructors** — they create a new empty instance, not query boolean state. These are **exempt** from the `is`/`has` prefix requirement (P1).

Boolean query methods — such as `isEmpty()`, `isDefined()`, `hasError()`, `isSafe()`, `hasItems()` — **do** follow P1.

---

## Cross-References

- [No Raw Negations](./08-no-negatives.md) — Full guard function inventory
- [Code Style — Rule 3](./03-code-style.md) — Complex condition extraction
- [Function Naming](./07-function-naming.md) — No boolean flag parameters
- [Master Coding Guidelines](./00-master-coding-guidelines.md) — Consolidated reference

---

*Boolean principles specification v4.0.0 — 2026-03-30*
