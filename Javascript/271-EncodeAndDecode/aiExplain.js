function decode(str) {
  let result = []; // 1. Initialize an empty array to store the decoded strings.
  let i = 0; // 2. Initialize a pointer `i` to the beginning of the input string `str`.

  while (i < str.length) {
    // 3. Loop as long as `i` hasn't reached the end of the string.
    let j = str.indexOf("#", i); // 4. Find the position of the next '#' character.
    //    - `str.indexOf('#', i)` searches for '#' starting from index `i`.
    //    - This `j` will mark the end of the "length" part.

    let length = parseInt(str.slice(i, j), 10); // 5. Extract the length of the next string.
    //    - `str.slice(i, j)` extracts the substring
    //      from `i` up to (but not including) `j`.
    //      This substring represents the length (e.g., "5").
    //    - `parseInt(..., 10)` converts this substring
    //      into an integer (base 10).

    i = j + 1; // 6. Move `i` past the '#' delimiter.
    //    - `j` was the index of '#'.
    //    - `j + 1` makes `i` point to the beginning of the actual string content.

    result.push(str.slice(i, i + length)); // 7. Extract the actual string and add it to `result`.
    //    - `str.slice(i, i + length)` extracts the substring
    //      starting from the current `i` (beginning of the string content)
    //      and extending for `length` characters.
    //    - `result.push(...)` adds this extracted string to our `result` array.

    i += length; // 8. Advance `i` past the just-extracted string.
    //    - `i` was pointing at the beginning of the extracted string.
    //    - Adding `length` to `i` makes it point to the very next character
    //      after the extracted string, which should be the beginning of the
    //      next "length" part, or the end of the overall string.
  }
  return result; // 9. Return the array of decoded strings.
}
