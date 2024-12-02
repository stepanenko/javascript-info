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
Match any one of the characters inside square brackets:

`[abc]` Matches "a", "b", or "c"  
`[a-z]` Matches any lowercase letter  
`[^a-z]` Matches any character except lowercase letters  

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

# Examples

### Match a phone number pattern:
```js
const regex = /\d{3}-\d{3}-\d{4}/;
console.log(regex.test("123-456-7890")); // true
```

### Extract email addresses:
```js
const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const text = "Contact us at support@example.com.";
console.log(text.match(regex)); // ["support@example.com"]
```

### Check if a string starts with "Hello":
```js
console.log(regex.test("Hello World")); // true
```

### Replace digits in a string:
```js
const regex = /\d/g;
const result = "Order 1234".replace(regex, "#");
console.log(result); // "Order ####"
```

### Validate an Email Address:
```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test("test@example.com")); // true
console.log(regex.test("invalid-email"));   // false
```
