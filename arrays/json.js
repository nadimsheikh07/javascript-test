import { UserData } from "../data/users.js";

const stringifyData = JSON.stringify(UserData)

console.log(JSON.parse(stringifyData))
