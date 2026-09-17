import { UserData } from "../data/users.js";

const data = UserData.map((user) => {
    return user
}).filter((user) => user.isActive)

console.log(data)

let newUsers = []
UserData.forEach((user) => {
    if (user.isActive) {
        newUsers.push(user)
    }
})

console.log(newUsers)

for (let index = 0; index < UserData.length; index++) {
    const element = UserData[index];
    console.log(element)
}

