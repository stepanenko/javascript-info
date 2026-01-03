# Regular Expressions

Regular expressions (regex) are patterns used to match character combinations in strings.  
They are commonly used for searching, validation, and string manipulation.

## Literal Characters
Match exact characters in the pattern: `hello` matches the string `"hello"`

## Metacharacters
Special characters with specific meanings:

`.` Matches any single character (except newline)  
`^` Matches the start of a string  
`$` Matches the end of a string  
`*` Matches 0 or more occurrences of the preceding element  
`+` Matches 1 or more occurrences of the preceding element  
`?` Matches 0 or 1 occurrence of the preceding element  

## Character Sets
Match any one of the characters inside `[]` square brackets:

`[abc]` matches "a", "b", or "c"  
`[a-z]` matches any lowercase letter  
`[^a-z]` matches any character except lowercase letters (`^` not)  
`[a-zA-Z0-9]` matches any alphanumeric character (combined sets)  
`[.+*]` matches "+", ".", or "*"  

## Quantifiers
Define how many times a pattern should occur:

`{n}` Exactly n times  
`{n,}` At least n times  
`{n,m}` Between n and m times  

## Escaping Special Characters
Use `\` to escape metacharacters if you want to match them literally:

Example: `\.` matches a literal dot

## Predefined Character Classes

`\d` Matches any digit (0-9)  
`\D` Matches any non-digit  
`\w` Matches any word character (letters, digits, underscore)  
`\W` Matches any non-word character  
`\s` Matches any whitespace (space, tab, newline)  
`\S` Matches any non-whitespace character  
`\b` Word boundary - marks the start and the end of a word
`\B` Non-Word Boundary - find a pattern that is "buried" inside another word

## Groups and Capturing

Use parentheses `()` to group parts of the regex and capture matches:

Example: `(ab)+` matches "ab", "abab", etc.

## Alternation (`|`)

Acts as an OR operator:

Example: `cat|dog` matches "cat" or "dog".

## Flags

Modify the behavior of regex (added after the pattern, like `/pattern/flags`):

`i` Case-insensitive matching  
`g` Global matching (find all matches)  
`m` Multiline matching  

---

# Examples

### Match a phone number pattern:
```js
const regex = /\d{3}-\d{3}-\d{4}/;

console.log(regex.test("123-456-7890")); // true
```

### Check if a string starts with "Hello":
```js
const regex = /^Hello/;

console.log(regex.test("Hello World")); // true
console.log(regex.test("Saying Hello")); // false (it's not at the start)
console.log(regex.test("hello world")); // false (RegEx is case-sensitive by default)
```

### Replace digits in a string:
```js
const regex = /\d/g;

const result = "Order 1234".replace(regex, "#");
console.log(result); // "Order ####"
```

### Extract email addresses:
```js
const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const text = "Contact us at support@example.com.";

console.log(text.match(regex)); // ["support@example.com"]
```
`\b` - word boundary, it ensures that the email isn't part of a larger string of characters (like myemail@test.com123). It marks the start and the end.

### The "Whole Word" Search:
```js
const text = "The planet's plan was written on the airplane.";

const noBoundary = /plan/g;
console.log(text.match(noBoundary)); 
// Output: ["plan", "plan", "plan"] (Matches inside planet and airplane)

const withBoundary = /\bplan\b/g;
console.log(text.match(withBoundary)); 
// Output: ["plan"] (Only matches the standalone word)
```

### Matching a Prefix vs. a Suffix:

You can place the boundary at just one end of the pattern to find words that start or end with specific characters.

- Starts with "cat": `\bcat`

    - Matches: "category", "catnip"

    - Does NOT match: "concacatenate"

- Ends with "ing": `ing\b`

    - Matches: "running", "singing"

    - Does NOT match: "kingdom" (because the 'd' follows the 'g')

### Find a pattern that is "buried" inside another word:
```js
const regex = /\Bplan\B/; 
// This would match "exPLANation" but NOT "plan" or "planet".
```

### Validate an Email Address:
```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(regex.test("test@example.com")); // true
console.log(regex.test("invalid-email"));   // false
```
