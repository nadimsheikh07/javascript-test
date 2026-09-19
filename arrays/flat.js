let array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

console.log(array.flat(2))
console.log(array.flat(Infinity))



let users = [
    {
        name: "a",
    },
    [
        {
            name: "b"
        },
        [
            {
                name: "c"
            }
        ]
    ]
]


console.log(users.flat(Infinity))