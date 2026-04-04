# Complex Condition Code Review

# Complex If Condition Detected - Or Avoid negative condition [Dangarous]

- Use var to make the code more readable.
- Business codes require more readability than performance.
- Don't use negative condition.
    - Rather using `IsNotBlocked` **use must** 
        - `IsBlocked` and then use a function where it returns
        - `IsActive () -> !IsBlocked`
    - **DON'T over complicate codes!**
    - **Don't negate a negative condition**

## Images

![img 2](https://i.ibb.co/LpfZVpW/download.jpg)

![img](https://i.ibb.co/FnddV95/Conditionals.png)

- https://prnt.sc/6BLRPh-QgacP
- https://prnt.sc/u-QFDlrFSCBA

## Don't negate a negative condition

**Bad ❌**

```golang=
var isNotBlocked = false


// to check if active

if isNotBlocked {
   // active
   // in your brain, 
   // you need to think twice
}


if !isNotBlocked {
   // not active, meaning blocked
   //     isNotBlocked == active and 
   //     inverting it isBlocked
   // in your brain, 
   // you need to think twice
   
   // There is a very good chance of making mistake
   
   // Reducing mistake will improve code maintaince
}

```

**Good ✔✅ : Always be positive**

```golang=
var isActive = false
var isBlocked = !IsActive

// to check if active
if isActive { 
   // active
}

// to check if IsBlocked
if isBlocked { 
   // blocked
}

```

## An Example

**FROM : Bad ❌**

```go=
if command != constants.EmptyString && (strings.HasPrefix(field, constants.Dash) || field == consts.IptablesNegateMatch) {
  ...
}
```

**TO : Good ✔✅ - Always be positive**

```go=
hasValidCommand := command != constants.EmptyString
hasDashPrefix := isCommandEmpty && strings.HasPrefix(field, constants.Dash)
hasNegateMatchOnField := field == consts.IptablesNegateMatch
hasDashPrefixOrNegateMatch := hasDashPrefix || hasNegateMatchOnField 

if hasDashPrefixOrNegateMatch   {
  ...
}
```

## Refernece (Condition)

![](https://prnt.sc/26n9365)
[![Kind of confusing, what they meant is to do first one than preferable to the 2nd one](https://i.imgur.com/E9WktoC.png)](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/general/g29-avoid-negative-conditionals.html)


* [Avoid Negative Conditionals | Clean Code: Smells and Heuristics](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/general/g29-avoid-negative-conditionals.html)
* [Encapsulate Conditionals | Clean Code: Smells and Heuristics](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/general/g28-encapsulate-conditionals.html)
* [Clean Code: Smells and Heuristics | A linkable reference of code smells and heuristics for better code reviews.](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/)