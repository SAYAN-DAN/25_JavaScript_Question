function reverse(num) {
  return Number(num.toString().split("").reverse().join(""));
}
// console.log(reverse(12));
// console.log(reverse(12345));

// type2:-------------------
// console.log(1234%10);
// console.log(1234/10);

function reverse(nums) {
  let rev = 0;
  while (nums > 0) {
    let rem = nums % 10;
    console.log(rem);
    rev = rev * 10 + rem;
    console.log(rev);
    nums = Math.floor(nums / 10);
    console.log(nums);
  }
  return rev;
}
console.log(reverse(1234));
