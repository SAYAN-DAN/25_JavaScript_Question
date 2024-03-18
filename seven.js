function palindromChecker(str) {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromChecker("poooop"));
console.log(palindromChecker("loop"));