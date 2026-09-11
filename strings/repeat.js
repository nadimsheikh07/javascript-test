let rows = 5;

for (let index = 1; index <= rows; index++) {
    let stars = "*".repeat(index);
    console.log(stars);
}

for (let index = 1; index <= rows; index++) {
    let spaces = " ".repeat(rows - index);
    let stars = "*".repeat(2 * index - 1);
    console.log(spaces + stars);
}

for (let index = rows; index >= 1; index--) {
    let spaces = " ".repeat(rows - index);
    let stars = "*".repeat(2 * index - 1);
    console.log(spaces + stars);
}