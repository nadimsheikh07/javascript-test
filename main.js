import { Greet } from "./module.js";

const user = {
    name: "Nadim"
}
Greet.call(user, "hi", "admin");
const bindCall = Greet.bind(user, "hi", "admin");
bindCall()
Greet.apply(user, ["hi", "admin"]);