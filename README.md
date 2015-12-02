

# String Manipulation

## Instructions

In this lab you'll be practicing manipulating strings.

1. In `lib/encoder.js` create a method that will take a string and apply methods from the String class to it to make the original meaning of the string difficult to discern.

2. In `lib/decoder.js` create a method that will take that mutated string from encoder.js and will return it to its original configuration, making the meaning of the string clear again.

3. Open `index.html` in the browser to see your functions in action!

Remember to add, commit, push your code up, and submit a pull request to light up the lights on learn.co!

## Example

For instance, say we built a encoder method that changed letters that resembled numbers into numbers, subbed whitespace for dollar signs, and then reversed the order of the string. The string "the great gatsby" would become "y65ta8$ta3r8$3ht".

```javascript
message = "the great gatsby"
encoder(message)
// 1. change letters to numbers
// => "th3 8r3at 8at56y"
// 2. replace whitespace with dollar signs
// => "th3$8r3at$8at56y"
// 3. reverse the order
// => "y65ta8$ta3r8$3ht"
```

The decoder should be able to take the string "y65ta8$ta3r8$3ht" and turn it back into "the great gatsby".

```javascript
encoded_message = "y65ta8$ta3r8$3ht"
decoder(encoded_message)
// 1. reverse back
// => "th3$8r3at$8at56y"
// 2. replace dollar signs with whitespace
// => "th3 8r3at 8at56y"
// 3. change numbers back into letters
// => "the great gatsby"
```

There are a ton of other ways to decode and encode strings so feel free to get creative!

<a href='https://learn.co/lessons/cssi-2.4-lab-string-manipulation' data-visibility='hidden'>View this lesson on Learn.co</a>
