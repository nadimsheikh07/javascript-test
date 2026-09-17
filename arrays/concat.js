let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'mango'];
let allFruits1 = fruits.concat(moreFruits); // Using concat
let allFruits2 = [...fruits, ...moreFruits]; // Using spread
console.log(allFruits1);
console.log(allFruits2);
