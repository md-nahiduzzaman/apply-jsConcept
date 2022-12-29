const greetings = "How are you?";
function reverseString(text) {
  let reverse = "";
  // for (const letter of text) {
  //   console.log(letter);
  // }

  for (i = 0; i < text.length; i++) {
    const letter = text[i];
    // console.log(letter);
    reverse = letter + reverse;
  }
  return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);
