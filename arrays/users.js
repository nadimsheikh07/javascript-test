console.time()

const users = [
    {
        "name": "Ali",
        "mobile": "789456123",
        "class": "B"
    },
    {
        "name": "Nadim",
        "mobile": "789456123",
        "class": "A"
    },
    {
        "name": "Ali",
        "mobile": "789456123",
        "class": "C"
    },
]


const search = "Nadim"

users.sort((a, b) => a.class.localeCompare(b.class))

console.table(users)

// const findUser = users.filter((user) => String(user.name).toLowerCase() == search.toLowerCase())

// console.table(findUser)


// for (let index = 0; index < users.length; index++) {
//     const element = users[index];
//     console.log("name:", element.name)
//     console.log("mobile:", element.mobile)
//     console.log("class:", element.class)
// }



// console.timeLog()