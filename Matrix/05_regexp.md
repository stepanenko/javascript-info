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
