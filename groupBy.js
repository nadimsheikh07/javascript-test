import { UserData } from "./data/users.js";

console.time()
const reduceUsers = UserData.reduce((acc, user) => {
    const role = user.role;

    // If the role doesn't exist as a key in the object yet, create an empty array for it
    if (!acc[role]) {
        acc[role] = [];
    }

    // Push the current user into their respective role array
    acc[role].push(user);
    return acc
}, [])
console.log(reduceUsers)
console.timeEnd()

console.time()
const groupByUsers = Object.groupBy(UserData, (user) => user.role)
console.log((groupByUsers))
console.timeEnd()
