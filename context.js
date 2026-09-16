function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const user = { name: "Alice" };

// Invokes immediately
greet.call(user, "Hello", "!"); 
// Output: "Hello, my name is Alice!"

const user2 = { name: "Bob" };

// Invokes immediately with arguments in an array
greet.apply(user2, ["Hi", "."]); 
// Output: "Hi, my name is Bob."


const user3 = { name: "Charlie" };

// Returns a new function, does not run right away
const boundGreet = greet.bind(user3, "Hey");

// Execute it later (can also pass remaining arguments here)
boundGreet("!"); 
// Output: "Hey, my name is Charlie!"