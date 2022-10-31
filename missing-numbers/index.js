// Find missing numbers in array and print with index. Range is 11 - 19

const arr = [11, 14, 17, 19];
let index = 0;

console.log("\nArray: " + arr + "\n");

for (let i = 11; i <= 19; i++) {
  if (arr.indexOf(i) < 0) {
    console.log(i + " is missing at index " + index);
  }
  index = ++index;
}
