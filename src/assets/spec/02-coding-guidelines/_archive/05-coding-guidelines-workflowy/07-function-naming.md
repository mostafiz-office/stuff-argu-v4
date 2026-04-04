# Function Naming — No Boolean Flag Parameters

> **Version:** 2.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript / React

---

## Rule

When a boolean parameter changes the **meaning** of an operation (not a minor detail), split the behavior into separate explicitly named methods. The call site must communicate intent without inspecting parameter values.

### Exception

Boolean parameters are acceptable when they adjust a **minor detail** within the same operation. When in doubt, split.

---

## Anti-Pattern

```typescript
// ❌ FORBIDDEN: Boolean flag hides intent
logMessage("Payment failed", true);   // What does `true` mean?
logMessage("User saved", false);      // What does `false` mean?
```

---

## Preferred Pattern: Explicitly Named Functions

```typescript
// ❌ FORBIDDEN
function logMessage(message: string, includeStack: boolean): void { ... }
logMessage("Failed", true);

// ✅ REQUIRED
function logMessage(message: string): void { ... }
function logMessageWithStack(message: string): void { ... }

logMessage("User saved");
logMessageWithStack("Payment failed");
```

---

## Guidelines

| Situation | Action |
|-----------|--------|
| Boolean changes operation meaning | Split into named functions |
| Boolean adjusts a minor formatting detail | Acceptable as parameter (confirm first) |
| More than one boolean flag | Always split — combinatorial APIs are unreadable |
| Flag count growing over time | Refactor to named functions immediately |

---

## Cross-References

- [Boolean Principles](./02-boolean-principles.md) — P5: No boolean parameters
- [Code Style](./03-code-style.md) — Formatting rules

---

*Function naming specification v2.0.0 — 2026-03-30*
