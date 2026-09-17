import { UserData } from "../data/users.js";


console.time()
const data = UserData.map((user) => {
    return user
}).filter((user) => user.isActive)
console.log(data)
console.timeEnd()

console.time()
let newUsers = []
UserData.forEach((user) => {
    if (user.isActive) {
        newUsers.push(user)
    }
})
console.log(newUsers)
console.timeEnd()

console.time()
let forUsers = []
for (let index = 0; index < UserData.length; index++) {
    const element = UserData[index];
    if (element.isActive) {
        forUsers.push(element)
    }
}
console.log(forUsers)
console.timeEnd()
