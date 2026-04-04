# Database Naming Convention — PascalCase

> **Version:** 3.0.0
> **Updated:** 2026-03-30
> **Applies to:** TypeScript (frontend) ↔ SQLite (backend)

---

## Overview

All **custom** database table names and column names MUST use **PascalCase** across the entire project. This ensures consistency with TypeScript types, API response keys, and the cross-language naming standard. No exceptions.

---

## Rules

### Rule 1: Table Names — PascalCase, No Prefix

```sql
-- ❌ FORBIDDEN
CREATE TABLE user_profiles (...);
CREATE TABLE agent_sites (...);

-- ✅ REQUIRED
CREATE TABLE "UserProfiles" (...);
CREATE TABLE "AgentSites" (...);
```

> **Note:** SQLite treats unquoted identifiers as case-insensitive. Always use double-quoted identifiers for PascalCase table and column names.

### Rule 2: Column Names — PascalCase

```sql
-- ❌ FORBIDDEN
CREATE TABLE "UserProfiles" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    display_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    is_active BOOLEAN DEFAULT true
);

-- ✅ REQUIRED
CREATE TABLE "UserProfiles" (
    "Id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "DisplayName" TEXT NOT NULL,
    "CreatedAt" TIMESTAMPTZ DEFAULT now(),
    "IsActive" BOOLEAN DEFAULT true
);
```

### Rule 3: TypeScript Interfaces — PascalCase Properties

TypeScript types that mirror database rows use PascalCase property names to match the schema directly:

```typescript
interface UserProfile {
    Id: string;
    DisplayName: string;
    CreatedAt: string;
    IsActive: boolean;
}
```

### Rule 4: Abbreviation Casing

Abbreviations follow the same rule — only the first letter is capitalized:

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| `userID` | `UserId` |
| `apiURL` | `ApiUrl` |
| `JSON` | `Json` |

### Rule 5: Index Names — PascalCase with `Idx` Prefix

```sql
-- ✅ CORRECT
CREATE INDEX "IdxUserProfiles_CreatedAt" ON "UserProfiles"("CreatedAt");
```

---

## Query Usage

When querying the database, column names use PascalCase (matching the schema):

```typescript
// Query uses PascalCase column names
const { data, error } = await db
    .from('UserProfiles')
    .select('Id, DisplayName, CreatedAt, IsActive')
    .eq('IsActive', true);
```

> **Important:** Always use double-quoted PascalCase identifiers in migrations and DDL statements.

---

## Common Mistakes

### Mistake 1: Using snake_case or camelCase in SQL

```sql
-- ❌ WRONG
CREATE TABLE user_profiles (display_name TEXT);
CREATE TABLE userProfiles (displayName TEXT);

-- ✅ CORRECT
CREATE TABLE "UserProfiles" ("DisplayName" TEXT);
```

### Mistake 2: Uppercase Abbreviations

```sql
-- ❌ WRONG
CREATE TABLE "Projects" ("ID" UUID, "ProjectID" TEXT, "URL" TEXT);

-- ✅ CORRECT
CREATE TABLE "Projects" ("Id" UUID, "ProjectId" TEXT, "Url" TEXT);
```

### Mistake 3: Forgetting Double Quotes in SQL

```sql
-- ❌ WRONG — unquoted identifiers lose casing
CREATE TABLE UserProfiles (DisplayName TEXT);
-- Actually creates: userprofiles.displayname

-- ✅ CORRECT — Double quotes preserve casing
CREATE TABLE "UserProfiles" ("DisplayName" TEXT);
```

---

## Cross-References

- [Master Coding Guidelines](./00-master-coding-guidelines.md) — Consolidated reference
- [Code Style](./03-code-style.md) — Formatting rules

---

*Database naming specification v3.0.0 — 2026-03-30*
