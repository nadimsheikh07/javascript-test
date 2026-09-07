function counter() {
    let count = 0;
    return {
        increment: () => {
            count++
            return count
        },
        decrement: () => {
            count--
            return count
        }
    }
}


const myCounter = counter();

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());

