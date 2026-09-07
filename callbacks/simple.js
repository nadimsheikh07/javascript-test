
function test(func, a, b) {
    return func(a, b)
}

function sum(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

console.log(test(sum, 10, 20))
console.log(test(minus, 20, 10))