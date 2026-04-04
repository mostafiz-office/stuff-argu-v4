# Reduce Cyclomatic Complexity to Near-Zero

> **Version:** 2.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Overview

Cyclomatic complexity measures the number of linearly independent paths through a function. This project enforces a **target complexity of 0–1** per function by using **early returns (guard clauses)** to eliminate nesting entirely.

---

## The Problem: Deeply Nested Code

```typescript
// ❌ BAD — Deeply Nested (Cyclomatic Complexity: 5)
const processOrder = (order: Order | null) => {
    if (order) {
        if (order.isVerified) {
            if (order.items.length > 0) {
                if (order.items.length > 15) {
                    throw new Error(`Order ${order.id} has too many items`);
                }

                if (order.status !== 'ready') {
                    throw new Error(`Order ${order.id} is not ready`);
                }

                order.isProcessed = true;
            }
        }
    }
};
```

---

## The Solution: Guard Clauses With Early Returns

```typescript
// ✅ GOOD — Flat Guard Clauses (Cyclomatic Complexity: 1)
const processOrder = (order: Order | null) => {
    if (isNullish(order)) {
        return;
    }

    if (!order.isVerified) {
        return;
    }

    if (isArrayEmpty(order.items)) {
        return;
    }

    if (order.items.length > 15) {
        throw new Error(`Order ${order.id} has too many items`);
    }

    const isPending = order.status !== 'ready';
    if (isPending) {
        throw new Error(`Order ${order.id} is not ready`);
    }

    // All guards passed — process the order
    order.isProcessed = true;
};
```

---

## The Pattern: Guard → Early Exit → Happy Path

```
function doSomething(input) {
    // Guard 1: Reject null/empty
    if (input is invalid) { return / throw }

    // Guard 2: Reject unauthorized
    if (input lacks permission) { return / throw }

    // Guard 3: Reject business rule violation
    if (input exceeds limit) { throw }

    // ── All guards passed ──
    // Happy path executes here with zero nesting
    execute(input)
}
```

---

## Complexity Scoring

| Complexity | Rating | Action Required |
|-----------|--------|-----------------|
| 0–1 | ✅ Ideal | No action needed |
| 2–3 | ⚠️ Acceptable | Consider refactoring |
| 4+ | ❌ Rejected | Must refactor before merge |

---

## React Component Example

```typescript
// ❌ FORBIDDEN — Nested conditions in component
const UserProfile = ({ user, isLoading, error }: Props) => {
    if (!isLoading) {
        if (!error) {
            if (user) {
                return <div>{user.name}</div>;
            }
        }
    }

    return <Spinner />;
};

// ✅ REQUIRED — Flat guard clauses
const UserProfile = ({ user, isLoading, error }: Props) => {
    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (isNullish(user)) {
        return <EmptyState />;
    }

    return <div>{user.name}</div>;
};
```

---

## Relationship to Other Rules

| Rule | How It Helps |
|------|-------------|
| [Rule 2: Zero Nested `if`](./03-code-style.md) | Enforces the same principle at the syntax level |
| [Rule 6: 15-Line Function Limit](./03-code-style.md) | Guards keep functions short |
| [Boolean Principles](./02-boolean-principles.md) | Guards use `is`/`has` named booleans for clarity |
| [No Raw Negations](./08-no-negatives.md) | Guards use positive names (`isFileMissing`) not `!fileExists()` |

---

## Checklist Summary (Copy for PRs)

```
[ ] No nested `if` blocks — all conditions are guard clauses
[ ] Happy path is at the bottom of the function with zero nesting
[ ] Each guard uses early return or throw
[ ] Complex conditions are extracted to named booleans
[ ] Function complexity is 0–1 (max 3 in exceptional cases)
```

---

*Cyclomatic complexity specification v2.0.0 — 2026-03-30*
