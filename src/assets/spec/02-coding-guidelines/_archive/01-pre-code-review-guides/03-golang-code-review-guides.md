# Golang Code : Review Guides

## Issues found Frequently

- New lines
- Double newlines
- No space after `//`
- DRY principle violations
- Magic String/Number
- Error Shallow
- Naming convention not following

## Guides

- **[General]** Never submit comment code- 
- **[General]** Commnet should have space after `//`, eg. `// This my comment` not `//this is my comment`
- **[General]** Naming convention must.
    - Override by project guide-lines.
    - [Naming Convention](#Naming-Convention)
- **[General]** [Every variable should be assigned only once, the best case senario. Try to have const or immutable object.](#Code-Mutation-Dangaours-Issue-code-RED-Avoid-and-Example)
    - At the worst case can be a loop take data or slice appending item can have multiple assigns. 
    - Or also, if variables changed, it should be done in one method, not in multiple.
        - Except for the design pattern implementations
- **[General]** **No magic string, or number, make constant for each magic number or string.** ("...anything", 1, 2). Use constant to resolve this review rejection. Unless language has some sort of overruling.
- **[General]** **There should be a newline** ([New Line Code Style Examples](#New-Line-Code-Styling))
    - **[General]** After any curly brace `}`, but not with [consecutive ones](#New-Line-Code-Styling)
    - **[General]** After `comma [,]`, if there is more than 2 parameters or arguments in function calling or in function definition or contructor injection or in property assigning. (JavaScript can have some exceptions, will be added in future.)
    - **[General]** Before any return if there are [multiple lines in the method or within the block.](#New-Line-Code-Styling)
        - Exception: If a single line in the method then no newline before.
        - Exception: If any `if` statements returns and there is a single line in it then no newline. However, if the `if` statement block contains more than one line, there should be a new line.
- No new line ([New Line Code Style Examples](#New-Line-Code-Styling))
    - **[General]** Consecutive curly braces or parentthesis.
    - **[General]** After Return Statement
    - **[General]** After Newline (that mean no double new line in the code)
- [**Function guideline must**](#Function-Guideline)
- **[General]** Avoid **multiple nesting or branching**, to resolve this we can use [function or inversing logic or taking variable approach](#Multiple-nesting-avoid-examples).
    - [How to reduce code nested brancing in golang](https://hackmd.io/@akarimevatix/golang-code-refactoring-reduce-branching-v1)
- **[Golang]** **DON'T** use more than one **`defer`** in one function as **defer** works as `stack` and it becomes complicated in future code maintain. If use it use it, on top or bottom.


## Function Guideline

**Function** should be small, follow these principles [**DRY** principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and [**SOLD** principle](https://www.udemy.com/course/design-patterns-go/learn/lecture/16912620#overview) [wiki SOLID](https://en.wikipedia.org/wiki/SOLID).

- **[Golang]** Should have proper naming, what it returns.
- **[General]** [Function should not(❌) exceed 3 arguments or parameters.](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/functions/f1-too-many-arguments.html)
    - **Exceptions :**
        - Frameworks can have more (✅) than 3 args it is fine. 
        - Frameworks need to fit all kinds of things, thus it can have it.
- **[General]** **Method Documenting:** Usually simple methods doesn't require method **documenting**. However, if a method is doing something different (bad practice) or something implicit (bad practice) which cannot be directly explained with the naming then method documenting is a must. (The best approach is always to explain everything in naming if possible), these below cases method documenting is good and must.
    - Processing some data, an example can be added to the method. For example, `path.Clean` does path cleaning and normalizing what it does.
    - Or, If we are taking someone else's code then we should cite it as a must.
    - Or, **the team prefers to have the doc to generate automatic documentation from the codebase at any time. [Which can be the most important factor in method documenting]**
    - **[Golang]** [Method documenting example starts with `//` on top of the method with no newline in between method and the docs](https://golang.org/src/go/doc/example.go)
- Golang:
    - **[Golang]** Getters:
        - Should have `Field()` not `GetField()`
    - **[Golang]** Setters:
        - Should have `SetField(..)` not `Field(...)`
    - **[General]** Any other method name can have Get which is fine.
    - **[Golang]** Constructor methods always starts with `New[StructName]`
    - **[General]** Try not to return more than 2 objects.
- **[General]** Try to have less than **8 lines** of code in one method, at worst case, the scenario could be 15 lines, and the method should not exceed 25 lines (which can be referred to as `broken-fix-code`).
    - This can be overruled while creating a framework function or some function that is memory intensive and require optimization. Making small function adds more function stack, thus memory cost and CPU counter cost as well.
- **[Golang]** Exporting / public method should have `CamelCase`.
- **[Golang]** Non exported / private methods should have `lowerCamelCase`.
- **[General]** (Doesn't apply in golang) to apply SOLID easily: 
    - Every class should be inherited from at least a single Interface and a single interface should hold only a single method.
    - Now class which requires more than one method should inject or requires those interfaces of methods which required to be available in the class. 
    - This class will be in solid principal and will be short less than **60 lines of code and maintainable.**
- **[Golang]** **Unit-Test** names should start with `Test...`

## Naming Convention

- **[General]**: Can always be overridden by Project guidelines or needs or reviewers preferences.
- **[General]** `Is...`, `Has...`, `Can..`, `Should..`, (lower priority at the end `Does..`)  methods or variables should always returns a bool. 
    - `Is...` is highly recommend unless it doesn't go with the grammar (or may sound odd with `Is...` then other versions are recommended line `Has...` or `Can...`).
- **[Golang]**: Don't use any underscore anywhere.
- **[General]** **Singular** item **variable** should **NOT** have plural symbol like `es`,`s` or something like plural that represents multiple (`array`, `list`, `vector`, `slice`, `enumerable items`, `iterable`) things.
    - Example: a single person object should **NOT** be named as people, or persons, it should be named as `employeePerson` or something similar to that.
    - Exception case can be `OsGroup`, as `OsGroup` can be represented as a single item, like UnixGroup(Mac, Linux,..), WindowsGroup, in this case, the group is name is appropriate.
        - When we say `OsGroups`, it should represent an array of `OsGroup` items
- **[General]** **Multiple** item **variable** ( refers to `array`, `arraylist`, `linked list`, `list`, `vector`, `slice`, `enumerable items`, `iterable`) things should **NOT** have singular symbol like `result`, `person`, `employee` but plural like `results`, `people`, `OsGroups`
- **[General]** If we have a map then it would be better to represent it with `resultsMap` as the naming suggest what we are dealing with in the future.
- **[Golang]** Variable naming:
    - lower camel case: helloWorld not helloworld, hello_world
    - no underscores
- **[Golang]** Const naming:
    - Camel case: eg. `HelloWorld`, **NOT** (`helloWorld`, `HELLOWORLD`, `HELLO_WORLD`, `hello_world`, `helloWorld`)
    - no underscores
        - [GOlang's Constant, UpperCamelCase, Only POSIX const can have underscore which is an exception](https://stackoverflow.com/a/22688926) | [DO NOT follow](https://www.golangprograms.com/go-language/constants.html)

### Package naming convention (golang-package-naming)

- lowercase all: eg. helloworld not helloWorld, hello_world
- should not have like package/package, that means, we are expecting a package name `taskrunner` we should not have methods `taskrunner.taskrunner.DoSomething()`. Go naming should be `taskrunner.DoSomething()`
- folder and file name: 
    - It can be camelcase or all lower case or having hyphens or having underscores for test files.
    - I would prefer hyphens over others (eg. underscore, camelcase) for folder and file names, which looks good, in terms of GitHub.


## Make member - Lazy or LazyExecution 🐼🐌

Lazy means doesn't execute until needed. Don't be hungry. Lazy codes acts as caching. Basic principal in caching (Generate once and serve same data to many.)

**Lazy should be applied on fields (any of the cases)**:

- Heavy lifting code or heavy process.
- Static value, doesn't change.
- Or, Same data is asked by everyone.
- 60%+ cases don't need to execute at all.

**Lazy should NOT be applied**:

- Code is changing repeatedly. Data is not same as per request.
    - Func may require param to serve different things.

**Examples of usecase**

- Database query could be lazy. Only excute at the final stage
- Builder patterns in most cases lazy, takes instructions and executes by Build Command at last.

### Converting from NonLazy to Lazy Code

- Make non export field, expose as getter.
- In the getter method check with flag or nil that the member is not generated.
- Generate member in the if block and then assign to the non export field and return the field.
- In case of working with slice or array, use lock mechanism using mutex.
- Everytime the field is in used should be called from the method NOT the direct field.
- **If the required field is lazy, the current field should be lazy as well.**
    - [Dangerous Code Issue, must be avoided](https://gitlab.com/evatix-go/osacl/-/issues/11#note_580458231)


FROM

```go=
type Group struct {
	GroupID   string
	GroupName string
	Members   *UsersCollection // make member lazy
}
```

TO

```go=
type Group struct {
    GroupID   string
    GroupName string
    // make  Members export method, just like getter
    members   *UsersCollection // make member non-export
    // use lock if working with collection type or slice
    sync.Mutex
}

// must use the method rather than field
func (g *Group) IsMembersEmpty() int {
    return g.MembersLength() == 0
}

// must use the method rather than field
func (g *Group) MembersLength() int {
    return g.Members().Length()
}

func (g *Group) Members() *UsersCollection {
    if g.members == nil { // flag or nil check
        // generate
        members := "generator method or run something complex to return same data in future."
        // assign back to the members field
        g.members = &members
    } 

    // return the non-export field.
    return g.members
}

// Lock method for async usecase
func (g *Group) MembersLock() *UsersCollection {
    g.Lock()
    defer g.Unlock()
    
    return g.Members()
}
```

### Lazy Code References

- [Lazy Rune Length Generate](https://t.ly/wzzC)
- [IsNull Lazy](https://gitlab.com/evatix-go/strhelper/-/blob/draft/develop/strswasync/Wrapper.go#L271)
- [IsNull Lazy with Lock](https://gitlab.com/evatix-go/strhelper/-/blob/draft/develop/strswasync/Wrapper.go#L282)
- https://en.wikipedia.org/wiki/Lazy_evaluation
- https://en.wikipedia.org/wiki/Lazy_loading
- [Important! Lazy field depends on](https://gitlab.com/evatix-go/osacl/-/issues/11)

## How to use Regex in Golang

Regex is complex and usages backtrack programming to find matches, it is extremly expensive. It should be delt with care and caution. Regex should be the last resort of programming to detect some pattern in string.

### Regex should NOT be used:

- Searching dots or comma and then trimming each word.
- Search for specific text in each line.
    - Search starts with for each line.
    - Search for ends with in each line.
    - Search number in line.
        - It depends if something is common then first cut out the specific part of the string which is common and then apply the regex on the dynamic string to find the pattern.

### Regex should be used (must use with care):

- Search dynamic text with pattern.
- Code or syntax parsing.
- Ignoring whitespace and finding a match with required pattern.
- Where searching becomes too complex with for->for->for like bigO(n^3) then must use regex.

### How to use it

- Regex must be compiled in a var outside of func.
    - Must used in `var` for golang in the constants sections.
    - Use and add sample data with regex for example:
    - ![](https://i.imgur.com/aM4FPTT.png)
- ![](https://i.imgur.com/nvnxQZW.png) 
- [GoTooling in Action - Improve Benchmarking by Putting Regex into var rather inside function](https://youtu.be/uBjoTxosSys?t=1451)
- If regex required to run in a loop or function verify with your mentor or reviewer. 
    - Don't write code and then get rejection.

## Using Newline in Output or Splitting Confusing

It is confusing to use which newline from constant should be a priority and what to use. As os, has specific new line standards (Windows - `"\r\n"` and Unix `"\n"`)

In 90% of the cases, NewLineUnix ([`constants.NewLineUnix`](https://gitlab.com/evatix-go/core/-/blob/develop/constants/constants.go#L22)
) should be used. The only case, where [`constants.NewLine`]((https://gitlab.com/evatix-go/core/-/blob/develop/constants/constants.go#L22)
) should be used where we are asking the user for NewLine preference based on Operating System. An example from IDE can help understand this

![](https://i.imgur.com/Aj4HoYf.png)
![](https://i.imgur.com/CqxKt1m.png)


If a file has `\r\n` and if we read using `\n`, problems can remain depending on the requirements. However, if we are parsing parse only lines without whitespace then it can be fixed at some level.

Choosing a newline preference always depends on the situation. In most cases, we should use `\n` [`constants.NewLineUnix`](https://gitlab.com/evatix-go/core/-/blob/develop/constants/constants.go#L22)


It is still debatable and can differ.

## Draft Notes

```notes
private 
func nonExport

public
func Export

x _ don't use

the name should be meaningful.


What makes a good function:
1. Function name should be self-explanatory.
    - Function Name Short (argument) : OpenMail
    - Function Name Full (argument) : OpenSmtpProtocolMail
    - Function Combined (argument) : ReadWriteFile
        - Single Responsibility (SOLID)
            - ReadFile
            - WriteFile
2. Function should not be more than 15 lines of code. Worst case can have 25
3. Function should not have more 3 parameters
    - Interface (Animal (eat, walk, run)-> Dog, Person) - I don't care how you do it, I should have the ability to do it.
    - Struct (Person -> can have attributes of Animal)

4. Struct or class or file should not be more than 120 lines
5. Returns one item pass (good)
    - Good: Array, Map -> Interface, Struct
        -> Array, map def could change.
    - ...

Why we are writing more code?

funcA(a1Struct)

funProcess() {
    v = funcA(a1Struct)
    v...
}


funProcess2() {    
    funcA(a1,.....a6)
}

funProcess3() {    
    funcA(a1,.....a6, a)
}

funProcessN() {

    funcA(a1,.....a6)
}

Problem
 - Tedious Change in the future.
 - Chances of breaking.
 - Time-consuming
 - No guarantee to run successfully in future


Useful:
- Saves time
- Makes code more compact
- Success chances increase
```


## New Line Code Styling

- Sample 

```go
func Something() int {
  return constants.One // alright
}
```

- Issue

```go
func Something() int {
  doSomething()
  return constants.One // NOT Alright
}
```

- Fix

```go
func Something() int {
  doSomething()

  return constants.One // Alright
}
```
- Issue
```go
func Something() int {
  doSomething()
  if isNumber {
      doSomethingNew()
      return constants.One // NOT alright
  }
}
```     

- Fix

```go
func Something() int {
  doSomething()
  if isNumber {
      doSomethingNew()

      return constants.One // alright
  }

  return constants.MinusOne // alright
}
```

- No new line in between curly braces if there is no code

```go
func Something() int {
  if isApplicable1 {
      if isApplicable2 {
          return constansts.One // alright
      }  // alright no new line recommended
      // there should be no newline
  }  // NOT alright no new line recommended
}
```

- No new line in between curly braces if there is no code

```go
func Something() int {
  if isApplicable1 {
      if isApplicable2 {
          return constansts.One // alright
      }  // alright no new line recommended
  }  // alright no new line recommended
}
```

- No new line at the start of the function or double new lines together

```go
func Something() int {
                             // <- NOT alright, however can put comment at the first line, which is fine.
  doSomething()
                             // <- NOT alright double newline
                             // alright here because of the return statement
  return constants.One 
}
```

## Multiple nesting avoid examples

### Issue with nesting

Code nesting or branching makes the code complex (even if it is simple), consequently, we should always avoid code branching or nesting at our best. It helps to write simple unit tests and improves code maintainability in future.

Issue occur: Multiple levels of code nesting or branching using `if`s, it can also be `for`, `if`, `while` or other blocks nesting.

**Exception** case, [it is quite alright to have one loop and then a `if` statement branch](https://gitlab.com/evatix-go/pathhelper/-/blob/628dff7698f5e3ebb7d2ead57ff47af0bb0cc40c/expandEnvironmentVariable.go#L17). But not more than that. Moreover, to be specific this exception case doesn't apply on multiple `if` statements.

```go
func (wiki *WikiTimezone) Longitude() string {
	if len(wiki.LatLong) > 1{
		if len(wiki.LatLong) > 11 {
			return string(wiki.LatLong[7:])
		} else {
			return string(wiki.LatLong[5:])
		}
	}

	return ""
}
```

To resolve this issue we can use, we can use any of the below methods

#### Resolve nesting using method

```go=

// remember to keep `is` as your method prefix or can or has or should. `is` prefered as first option.
func isLatLongLengthGraterThanEleven(wiki *WikiTimezone) bool {    
    return len(wiki.LatLong) > 11
}

func (wiki *WikiTimezone) Longitude() string {
    if isLatLongLengthGraterThanEleven(wiki) {
        return string(wiki.LatLong[7:])
    } else if len(wiki.LatLong) > 1 {
        return string(wiki.LatLong[5:])
    }

    return ""
}
```


#### Resolve nesting using inverse logic

```go=

// remember to keep `is` as your method prefix or can or has or should. `is` prefered as first option.
// Since this empty reprsent not taking less than 4 length we should keep the name as per the logic, however, for the example case we are keeping it as is.
func isEmpty(wiki *WikiTimezone) bool {    
    return len(wiki.LatLong) <= 4
}

func (wiki *WikiTimezone) Longitude() string {
    // negative logic comes first
    if isEmpty(wiki.LatLong) {
        return ""
    }

    if len(wiki.LatLong) > 11 {
        return string(wiki.LatLong[7:])
    }
    
    return string(wiki.LatLong[5:])
}
```

**Notes:** We haven't used the else part the in the last return because it is redudant. We should always try to avoid **`else`** if it is not necessary.


### Example of Resolving Nested branching on Complex Code (level 4 to level 1)

- [How to reduce code nested brancing in golang](https://hackmd.io/@akarimevatix/golang-code-refactoring-reduce-branching-v1)

#### Resolve nesting using inverse logic, variables and ternary operators

Golang doesn't have any ternary operators so assume that it has and the process may look like this below:

```go

// remember to keep `is` as your method prefix or can or has or should. `is` prefered as first option.
func isEmpty(wiki *WikiTimezone) bool {    
    return len(wiki.LatLong) <= 0
}

func getLatLongSplitAtFive(wiki *WikiTimezone) string {    
    return len(wiki.LatLong) > 5 ? string(wiki.LatLong[5:]) : ""
}

func (wiki *WikiTimezone) Longitude() string {
    // negative logic comes first
    isEmptyLatLong := isEmpty(wiki.LatLong)
    length := len(wiki.LatLong)
    isApplicableForSplitAtEleven := length > 11
    
    // final result can be returned with ternary operator but golang doesn't have tarnary, however, assume we have it and then we can do it.
    splitAtFiveOrEmpty := isEmptyLatLong ? "" : 
    applicableResult := isApplicableForSplitAtEleven ? 
    string(wiki.LatLong[7:]) : getLatLongSplitAtFive(wiki)
    
    /**
      * Warning: don't write nested condition inside ternary operator ever, that is another red.       
      * this code is very simple in terms of unit testing
      * Unit testing becomes complicated once code branching or nesting introduced.

      * However, as go doesn't have ternary operator we cannot use it.
      * Which is good thing, ternary operator sometimes gets abused and it is easy to read if-else than ternary operators.
      * Summary: For golang we should use `Resolve nesting using inverse logic`, plus, we can use the method combination as well.
    **/
    
    return applicableResult    
}
```

### Avoid `else` if not necessary

- Issue

```go=
func getValue(val []string, index int) string {
	if val[index] != "" {
		return val[index]
	} else {
		return "-"
	}
}

```

- Fix

```go=
func getValue(val []string, index int) string {
	if val[index] != "" {
		return val[index]
	} 
                // <-- must have a newline
    return "-"  // no need to have else part.
}

```
## [Code Red](#Code-Red), [Dangerous](#Dangerous): Null Pointer Issue

- Should **NOT** call directly a return value from a function unless it is a constructor or gurateed to have the result except `nil`.
- Every return **pointer** value should be tested not nil before calling or access any member (field or function / method) of the struct.
- Before making a variable to pointer, must check if the variable is not nil.

```go=
// returns risky pointer which may break in real world.
fun anyBytesRickyPtr() *[]Byte {
    anyBytes = getBytes(...) // []Byte

    return &anyBytes // send pointer of []Byte is dangerous.
}

```


```go=
// solution to pointer return
fun anyBytesSafePtr() *[]Byte {
    anyBytes = getBytes(...) // []Byte
    
    if anyBytes == nil {
        return nil
    }

    return &anyBytes // send pointer of []Byte
}
```

- Every array should be tested with nil before access any index or itself.

```go=
anyBytes = getBytes(...) // []Byte

// anyBytes == nil can be nil as well
// len(anyBytes) == 0 when anyBytes == []
if anyBytes == nil || len(anyBytes) == 0 {
    return ... exitResult
}

// do stufss with anyBytes
```

- Any pointer acessing should be checked with not nil. 

```go=
anyPtr = getPointerBytes(...) // *[]Byte

if anyPtr == nil { // pointer nil
    // should not access any ptr *anyPtr before checking not nil
    return ... exitResult
}

// if it is array based ptr then
// *anyPtr == nil can be nil as well
// len(*anyPtr) == 0 when *anyPtr == []
if *anyPtr == nil || len(*anyPtr) == 0 {
    return ... exitResult
}

// do stufss with anyPtr
```

```go=
func CloseProcessByName(processName string) ProcessClosedStatus {
        // serious issue, code red
	output, err := exec.Command(
		constants.Wmic,
		constants.Process,
		constants.Get,
		constants.ProcessIdAndCaption,
	).Output() // ).Output() will fail at anytime.
```

```go=
func CloseProcessByName(processName string) ProcessClosedStatus {
	cmd, err := exec.Command(
		constants.Wmic,
		constants.Process,
		constants.Get,
		constants.ProcessIdAndCaption,
	)
    
    // wrong, must check err before cmd.
    if cmd != nil ...
```

```go=
func CloseProcessByName(processName string) ProcessClosedStatus {
    cmd, err := exec.Command(
        constants.Wmic,
        constants.Process,
        constants.Get,
        constants.ProcessIdAndCaption,
    )
    
    // always first check err not nil or nil
    // !Important: If an error is returned from a function, 
    // one must handle it gracefully 
    // reference https://hackmd.io/DErHiap-RWSXwIqFkxWwCg
    if err != nil || cmd == nil {
        // return by capturing error in struct.
        return ...exit condition result.
    }
    
    // work with cmd here
    // ...
    output := cmd.Output()
    ...
```

**, Or**

Note: **Handle error with panic, not appropriate here in terms of naming.**

```go=
func CloseProcessByName(processName string) ProcessClosedStatus {
    cmd, err := exec.Command(
        constants.Wmic,
        constants.Process,
        constants.Get,
        constants.ProcessIdAndCaption,
    )
    
    // always first check err not nil or nil
    // !Important: If an error is returned from a function, 
    // one must handle it gracefully 
    // reference https://hackmd.io/DErHiap-RWSXwIqFkxWwCg
    if err != nil {
        handleError(err) // or return with single struct
    }
    
    if cmd == nil {
        return ...exit condition result.
    }
    
    // work with cmd here
    // ...
    output := cmd.Output()
    ...
```

## Code Mutation (Dangaours Issue, code RED) Avoid and Example

Code mutation, refers to the variable modification, which violates the code review rules (as no variable or things should be changed and should be assigned only once). At the wrost case senario it can be only applied for caching a variable or [lazy instanciation / evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation) where an execution requires a for-loop or many checking which will be same after the first time checking then there is no point of running the same thing more than once but cache it using a variable. In that case we can mutate a variable. Keep in mind mutating a variable requires mutation lock, or else it will fail in asyc / gorountine environment. Plus, also keep in mind that adding a lock is also expensive. One can solve it with two ways (a. Lock version of the method b. non lock version of the method). So for example, if a method does GetLines (example can be obtained from strhelper) which is the non lock versin, another version could be GetLinesLock() ->

```go=
func (r *receiver) GetLinesLock() []string {
  r.Lock() // which is mutex lock from inside the struct
  defer r.Unlock()
  
  return r.GetLines()
}
```

Returning variable, updated multiple times, can be fixed.

### Current version (with mutation issue)

```go=

// code with mutating issue
returningVal := New(...params)

returningVal.Set...(...) // or
returningVal.VarName = ... 

return returningVal

```

### Fixed code mutation (eg. # 1)

```go=

varName := whatEverValue

// code constructor took the VarName 
returningVal := New(varName, ...params)

return returningVal
```

### Fixed code mutation (eg. # 2)

```go=
varName := whatEverValue

return ReturningValStruct{
     varName: varName // if in the same package
     ...
}
```

## Cheat Sheets

### Strings in GO

* [What is the point of passing a pointer to a strings in go (golang)? - Stack Overflow](https://stackoverflow.com/questions/24642311/what-is-the-point-of-passing-a-pointer-to-a-strings-in-go-golang)
* [Is string passed to function by value or by reference?](https://groups.google.com/g/golang-nuts/c/ZRKSJ3GPkLw)

![In Go Strings passes by Reference, but the struct gets copied which has length and bytes to pointer](https://i.imgur.com/xYGQ0qb.png)

Note: In Go Strings passes by Reference, but the struct gets copied which has length and bytes to pointer.

```go=

// String struct which gets copied but not the data.
type StringHeader struct {
    Data uintptr
    Len  int
}
```


### Slice

- [Go Cheat Sheet](https://gist.github.com/ikennaokpala/b839c00e0123374e0b58)
- [SliceTricks · golang/go Wiki](https://github.com/golang/go/wiki/SliceTricks)
- [Go Slice Tricks Cheat Sheet](https://ueokande.github.io/go-slice-tricks/)

Slice Struct

```go=
type SliceHeader struct {
    Data uintptr
    Len  int
    Cap  int
}
```

## Code Red

- [x] Code has serious issues, tends to be buggy in future.
- [x] Requires lots of investigation in future.
- [x] Fluctuating result / results.
- [x] May have locking related issue.
- [x] Looks alright but hard to detect bug.

## Dangerous

- [x] In some cases complements most points in [Code Red](#Code-Red).
- [x] Code could throw or panic at uncertain times.
- [x] Code may cause UX or UI issues.
- [x] May not trace log properly and swallow error or exit. Hard to trace in future.
- [x] May be not optimized in terms of BigO, could be easily optimized.
- [x] Lazy evalution not done properly.
- [x] Code may have unknown loop holes.
- [x] Mutex not used properly. Probably mutex created in the function, where mutex can be [parallel or global](https://drive.google.com/file/d/1Jk0m3yqOpDqyUg3YABippvJuAAUW6QVp/view).
