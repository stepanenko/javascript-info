# Regular Expressions

Regular expressions (regex) are patterns used to match character combinations in strings.  
They are commonly used for searching, validation, and string manipulation.

https://regex101.com/ - Popular, feature-rich online tool used for writing, testing, debugging, translating, and sharing regular expressions. It breaks down every token, group, anchor, and flag in plain English so you can understand how your pattern works.

## Literal Characters
Match exact characters in the pattern: `hello` matches the string `"hello"`

## Metacharacters
Metacharacters are characters with special meanings in RegEx that allow you to define patterns rather than just literal text. Think of them as the "operators" of the RegEx language:

`.` Matches any single character (except newline)  
`^` Matches the start of a string  
`$` Matches the end of a string  
`*` Matches 0 or more occurrences of the preceding element  
`+` Matches 1 or more occurrences of the preceding element  
`?` Matches 0 or 1 occurrence of the preceding element  
Note that `?` has a second job: placed after another quantifier (`*?`, `+?`, `??`), it makes that quantifier lazy.

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

## Character Classes
Shorthand symbols that represent a specific group of characters. The capitalization is key: the lowercase version matches a specific group, and the uppercase version is the "negation" (matches everything except that group).

`\d` Matches any digit (0-9)  
`\D` Matches any non-digit  
`\w` Matches any word character (letters, digits, underscore)  
`\W` Matches any non-word character  
`\s` Matches any whitespace (space, tab, newline)  
`\S` Matches any non-whitespace character  
`\b` Word boundary - marks the start and the end of a word  
`\B` Non-word boundary - find a pattern that is "buried" inside another word

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
`.` any single character (except newline)
```js
/c.t/.test("cat");      // true  (. matches "a")
/c.t/.test("c9t");      // true  (. matches "9")
/c.t/.test("ct");       // false (nothing between c and t)
/c.t/.test("caat");     // false (. matches only ONE character)

"a.b".match(/a.b/);     // matches "a.b"
"a-b".match(/a.b/);     // also matches, since . matches "-"
"a-b".match(/a\.b/);    // null, because \. means a literal dot

/a.b/.test("a\nb");     // false (newline not matched)
/a.b/s.test("a\nb");    // true  (the s flag lets . match newlines)
```

`^` Matches the start of a string  
```js
/^hello/.test("hello world");   // true
/^hello/.test("say hello");     // false (hello isn't at the start)

"line1\nline2".match(/^line\d/g);    // ["line1"] (only the string start)
"line1\nline2".match(/^line\d/gm);   // ["line1", "line2"] (m flag: each line start)

/[^abc]/.test("d");   // true; inside [...], ^ means "NOT", a different meaning
```

`$` end of string
```js
/world$/.test("hello world");   // true
/world$/.test("world peace");   // false

/^\d+$/.test("123");    // true  (whole string is digits)
/^\d+$/.test("123abc"); // false (the anchors force a full match)
/\d+/.test("123abc");   // true  (without anchors, partial matches pass)

"a\nb".match(/\w$/gm);  // ["a", "b"] (with m, $ matches at each line end)
```

`*` zero or more
```js
/ab*c/.test("ac");       // true  (zero b's)
/ab*c/.test("abc");      // true  (one b)
/ab*c/.test("abbbbc");   // true  (many b's)
/ab*c/.test("adc");      // false

"<<a>>".match(/<.*>/);    // ["<<a>>"] greedy: grabs as much as possible
"<<a>>".match(/<.*?>/);   // ["<<a>"]  lazy: grabs as little as possible

"x".match(/\d*/);         // [""] it matches an empty string, so * never "fails"
```

`+` one or more
```js
/ab+c/.test("ac");       // false (needs at least one b)
/ab+c/.test("abc");      // true
/ab+c/.test("abbbbc");   // true

"a1b22c333".match(/\d+/g);   // ["1", "22", "333"]
"  too   many   spaces ".replace(/\s+/g, " ");   // " too many spaces "
```

`?` zero or one (optional)
```js
/colou?r/.test("color");    // true
/colou?r/.test("colour");   // true
/colou?r/.test("colouur");  // false

/https?:\/\//.test("http://x.com");    // true
/https?:\/\//.test("https://x.com");   // true

/^-?\d+$/.test("42");     // true  (optional minus sign)
/^-?\d+$/.test("-42");    // true
```
Note that `?` has a second job: placed after another quantifier (`*?`, `+?`, `??`), it makes that quantifier lazy, as in the `<.*?>` example above.

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

### Checks if string ends with a question mark:
```js
const text = "Is this real?";

const regex = /\?$/;
console.log(regex.test(text)); // true
```

### Ensure the string contains only your pattern and nothing else:
The "Exact Match" Pattern - when you combine both `^` and `$`: 
```js
const onlyCat = /^cat$/;

console.log(onlyCat.test("cat"));         // true
console.log(onlyCat.test("catnip"));      // false (doesn't end at 't')
console.log(onlyCat.test("the cat"));     // false (doesn't start at 'c')
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
```js
// 1 starts with "cat"
const prefixRegex = /\bcat/g;

const text1 = "category";     // Match
const text2 = "catnip";       // Match
const text3 = "concatenate";  // No Match

console.log(prefixRegex.test(text1)); // true
console.log(prefixRegex.test(text2)); // true
console.log(prefixRegex.test(text3)); // false (cat is inside the word)

// 2 ends with "ing"
const suffixRegex = /ing\b/g;

const word1 = "running"; // Match
const word2 = "singing"; // Match
const word3 = "kingdom"; // No Match

console.log(suffixRegex.test(word1)); // true
console.log(suffixRegex.test(word2)); // true
console.log(suffixRegex.test(word3)); // false (g is followed by d, not a boundary)
```

### Find a pattern that is "buried" inside another word:
```js
const regex = /\Bplan\B/; 
// This would match "exPLANation" but NOT "plan" or "planet".
```

### Validate an Email Address:
```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(regex.test("test@example.com"));  // true
console.log(regex.test("invalid-email"));     // false
```

### Digits `\d` and `\D`:
```js
const phone = "Call: 555-0199";

console.log(phone.match(/\d/g));   // ["5", "5", "5", "0", "1", "9", "9"]
console.log(phone.match(/\D/g));   // ["C", "a", "l", "l", ":", " ", "-"]
```

### Word Characters `\w` and `\W`:
```js
const username = "Jack_99!";

console.log(username.match(/\w/g));   // ["J", "a", "c", "k", "_", "9", "9"]
console.log(username.match(/\W/g));   // ["!"]
```

### Whitespace `\s` and `\S`:
```js
const greeting = "Hi there\nJack";

console.log(greeting.match(/\s/g)); // [" ", "\n"]
console.log(greeting.match(/\S/g)); // ["H", "i", "t", "h", "e", "r", "e", "J", "a", "c", "k"]
```
