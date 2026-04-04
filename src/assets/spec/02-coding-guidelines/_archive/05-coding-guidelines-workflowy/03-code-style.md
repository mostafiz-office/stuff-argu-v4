# Code Style — Braces, Nesting, Spacing & Function Size

> **Version:** 5.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Overview

These rules govern control-flow formatting and function design across all TypeScript code in the project.

---

## Rule 1: Always Use Braces — No Single-Line Statements

Every `if`, `for`, `while` block **must** use curly braces `{}`, even for single-statement bodies.

```typescript
// ❌ FORBIDDEN
if (isLoading) return null;

// ✅ REQUIRED
if (isLoading) {
    return null;
}
```

---

## Rule 2: Zero Nested `if` — Absolute Ban

Nested `if` blocks are **absolutely forbidden**. Flatten using: (a) combined conditions, (b) early returns, (c) extracted helper functions.

```typescript
// ❌ FORBIDDEN: Nested if
if (response) {
    if (response.status >= 400) {
        handleError(response);
    }
}

// ✅ REQUIRED: Early return or combined condition
if (!response) {
    return;
}

if (response.status >= 400) {
    handleError(response);
}
```

---

## Rule 3: Condition Complexity Limits

### R3a — Maximum Two Conditions Per Expression

A single boolean expression may combine **at most two** operands with `&&` or `||`. Three or more operands **must** be decomposed into intermediate named booleans.

```typescript
// ❌ FORBIDDEN: Three conditions chained
const isDelegatedError =
    isDefined(response) &&
    response.status >= 400 &&
    response.data?.code?.startsWith('E8');

// ✅ REQUIRED: Decompose into two-condition steps
const isErrorStatus = isDefined(response) && response.status >= 400;
const isDelegatedError = isErrorStatus && response.data?.code?.startsWith('E8');

if (isDelegatedError) {
    showDelegatedError(response);
}
```

### R3b — Never Mix Positive and Negative in One Expression

A single boolean expression must not combine a negative check with a positive check. If you need both, extract into separate named booleans first.

```typescript
// ❌ FORBIDDEN: Negative (null check) mixed with positive
const isReady =
    response != null &&
    response.status === 200;

// ✅ REQUIRED: Separate the null guard, then check positive
if (isUndefined(response)) {
    return;
}

const isReady = response.status === 200;
```

### R3c — Extract Into Named Booleans

When an `if` condition contains **two or more operators**, extract into a named boolean. The `if` statement should read as a single intent.

```typescript
// ❌ FORBIDDEN: Multi-part condition inline
if (isLoggedIn && isAdmin) {
    showAdminPanel();
}

// ✅ REQUIRED: Named boolean
const hasAdminAccess = isLoggedIn && isAdmin;

if (hasAdminAccess) {
    showAdminPanel();
}
```

### Single-Condition Assignments Stay on One Line

```typescript
// ✅ OK: Single condition — one line
const isActive = status === 'active';
```

---

## Rule 4: Blank Line Before `return` or `throw` When Preceded by Other Statements

```typescript
// ❌ FORBIDDEN
const processData = (data: unknown[]) => {
    const filtered = data.filter(isValid);
    return filtered.map(transform);
};

// ✅ REQUIRED
const processData = (data: unknown[]) => {
    const filtered = data.filter(isValid);

    return filtered.map(transform);
};

// ✅ OK: Return is the only statement
if (!data) {
    return null;
}
```

---

## Rule 5: Blank Line After Closing `}` When Followed by More Code

```typescript
// ❌ FORBIDDEN
if (!user) {
    return;
}
const profile = await fetchProfile(user.id);

// ✅ REQUIRED
if (!user) {
    return;
}

const profile = await fetchProfile(user.id);
```

### After Loop Blocks

```typescript
// ❌ FORBIDDEN
for (const item of items) {
    processed.push(transform(item));
}
const result = merge(processed);

// ✅ REQUIRED
for (const item of items) {
    processed.push(transform(item));
}

const result = merge(processed);
```

### Exception: Consecutive Closing Braces, `else`, `catch`, `finally`

No blank line needed when `}` is immediately followed by another `}`, `else`, `catch`, or `finally`.

---

## Rule 6: Maximum 15 Lines Per Function — Extract Small Helpers

Every function body must be **15 lines or fewer** (excluding blank lines, comments, and the signature).

### 6a — Error Handling Lines Are Exempt

Error-guard blocks (`if (error)`, `try/catch` wrappers) and error-context lines **do not count** toward the 15-line limit. These are structural safety code, not business logic. Counting them would incentivize combining error handling into fewer lines, which **harms readability**.

```typescript
// ✅ This function is within the 15-line limit
// Error handling lines (marked with //*) are EXEMPT from count
const processUpload = async (request: UploadRequest): Promise<UploadResult> => {
    const validated = validateUpload(request);

    if (!validated) {                                    //* exempt
        throw new Error('Invalid upload request');       //* exempt
    }                                                    //* exempt

    const result = await executeUpload(validated);

    if (isNullish(result)) {                             //* exempt
        console.error('Upload failed', {                 //* exempt
            siteId: request.siteId,                      //* exempt
            path: request.path,                          //* exempt
        });                                              //* exempt

        throw new Error('Upload failed');                //* exempt
    }                                                    //* exempt

    return logAndRespond(result);
};
```

### 6b — How to Flatten

| Problem | Solution |
|---------|----------|
| Long setup + logic + cleanup | Extract each phase into a helper |
| Multiple validation checks | Extract `validateRequest()` helper |
| Complex data transformation | Extract `transformPayload()` helper |
| Repeated patterns | Extract shared utility function |

```typescript
// ❌ FORBIDDEN: Long function
const handleSubmit = async (data: FormData) => {
    // 20+ lines of validation, API call, state updates, toasts...
};

// ✅ REQUIRED: Decomposed
const handleSubmit = async (data: FormData) => {
    const validated = validateFormData(data);
    const result = await submitToApi(validated);
    updateLocalState(result);
    showSuccessToast(result.message);
};
```

---

## Rule 7: Zero Nested `if` — Absolute Ban (Reinforced)

Reinforcement of Rule 2. Any code review finding a nested `if` is an automatic rejection.

| Nesting Pattern | Flattening Technique |
|----------------|---------------------|
| Null guard → logic | Early return for null |
| Permission → action | Early return for no permission |
| Multiple conditions | Combined `&&` (extract if 2+ operators) |
| If-inside-loop | Extract loop body to helper function |

---

## Rule 9: Multi-Line Arguments — Signatures, Calls, and Arrays

When a function signature or call has **more than two arguments**, each argument must be on its own line with a trailing comma.

### 9a: Function Signatures (>2 Parameters)

```typescript
// ❌ FORBIDDEN (>2 params on one line)
function buildRecord(label: string, path: string, success: boolean, error?: string): void {

// ✅ REQUIRED
function buildRecord(
    label: string,
    path: string,
    success: boolean,
    error?: string,
): void {
```

### 9b: Function Calls (>2 Arguments)

```typescript
// ❌ FORBIDDEN (>2 args on one line)
const result = buildRecord(label, path, true, errorMessage);

// ✅ REQUIRED
const result = buildRecord(
    label,
    path,
    true,
    errorMessage,
);
```

### 9c: Array/Object Literals (>2 Items)

```typescript
// ❌ FORBIDDEN
const codes = [301, 302, 303, 307, 308];

// ✅ REQUIRED
const codes = [
    301,
    302,
    303,
    307,
    308,
];
```

---

## Rule 10: Blank Line Before Control Structures When Preceded by Statements

```typescript
// ❌ FORBIDDEN
const data = await fetchData(url);
if (!data) {
    return null;
}

// ✅ REQUIRED
const data = await fetchData(url);

if (!data) {
    return null;
}
```

---

## Rule 11: Method Chaining — Each Call on Its Own Line

When using **method chaining** (fluent API), every chained `.method()` call **must** be on its own line, indented one level. This applies to query builders, database client chains, array method chains, and any builder pattern.

```typescript
// ❌ FORBIDDEN — Multiple chained calls on one line
const result = queryBuilder.select('*').from('users').where({ isActive: true }).orderBy('name').execute();

// ✅ REQUIRED — Each call on its own line
const result = queryBuilder
    .select('*')
    .from('users')
    .where({ isActive: true })
    .orderBy('name')
    .execute();
```

```typescript
// ❌ FORBIDDEN — database chain on one line
const { data } = await db.from('UserProfiles').select('Id, DisplayName').eq('IsActive', true).order('CreatedAt', { ascending: false });

// ✅ REQUIRED
const { data } = await db
    .from('UserProfiles')
    .select('Id, DisplayName')
    .eq('IsActive', true)
    .order('CreatedAt', { ascending: false });
```

### Exception

Chains with **2 or fewer** method calls may remain on a single line if the total line length stays under 100 characters:

```typescript
// ✅ OK — short chain
const items = data.filter(isValid).map(transform);
```

---

## Rule 12: No Empty Line After Opening Brace

```typescript
// ❌ FORBIDDEN
if (isReady) {

    doSomething();
}

// ✅ REQUIRED
if (isReady) {
    doSomething();
}

// ❌ FORBIDDEN
const handler = () => {

    return processData();
};

// ✅ REQUIRED
const handler = () => {
    return processData();
};
```

---

## Rule 13: No Empty Line at Start of File

```typescript
// ❌ FORBIDDEN — blank line before first import

import { useState } from 'react';

// ✅ REQUIRED — code starts on line 1
import { useState } from 'react';
```

---

## Checklist Summary (Copy for PRs)

```
[ ] No single-line `if (...) return;` — always use braces
[ ] No nested `if` — ZERO TOLERANCE — flatten with early returns or combined conditions
[ ] No inline multi-part `if` (2+ operators) — extract to named variable or method
[ ] Blank line before `return` or `throw` when preceded by other statements
[ ] Blank line after closing `}` when followed by more code
[ ] Functions max 15 lines — extract helpers for longer logic
[ ] Error handling lines exempt from 15-line count
[ ] Functions/calls with >2 args — one arg per line with trailing comma
[ ] Array/object literals with >2 items — each item on its own line
[ ] Blank line before control structures when preceded by statements
[ ] Method chaining — each `.method()` on its own line (>2 calls)
[ ] No empty line after opening brace
[ ] No empty line at start of file
```

---

## Cross-References

- [No Raw Negations](./08-no-negatives.md) — Positive guard functions instead of `!`
- [Function Naming](./07-function-naming.md) — No boolean flag parameters
- [Strict Typing](./09-strict-typing.md) — Type declarations & docblock rules
- [Boolean Principles](./02-boolean-principles.md) — Named boolean variables

---

*Code style specification v5.0.0 — 2026-03-30*
