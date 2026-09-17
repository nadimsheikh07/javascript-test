import { UserData } from "../data/users.js";

const data = UserData.map((user) => {
    return user
})

console.log(data)

UserData.forEach((user) => {
    console.log(user)
})

for (let index = 0; index < UserData.length; index++) {
    const element = UserData[index];
    console.log(element)
}

