function alphebetical(num) {
  let newnum = num.split("").sort().join("");
  return newnum;
}
console.log(alphebetical("sayan"));
