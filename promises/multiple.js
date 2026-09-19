const fetchUsers = Promise.resolve(["Alice", "Bob"]);
const fetchOrders = Promise.resolve(["Order #1", "Order #2"]);

Promise.all([fetchUsers, fetchOrders])
    .then(([users, orders]) => {
        console.log("Both succeeded!", { users, orders });
    })
    .catch((error) => {
        console.error("One of them failed! Early exit.", error);
    });


const downloadFileA = Promise.resolve("File A downloaded");
const downloadFileB = Promise.reject(new Error("Network Timeout on File B"));

Promise.allSettled([downloadFileA, downloadFileB])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Task ${index} completed with:`, result.value);
            } else {
                console.error(`Task ${index} failed due to:`, result.reason.message);
            }
        });
    });



const fetchData = new Promise(res => setTimeout(() => res("Data received!"), 500));
const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout exceeded")), 200));

// Because the timeout is faster (200ms vs 500ms), the whole race rejects
Promise.race([fetchData, timeout])
    .then((winner) => console.log("Won the race:", winner))
    .catch((error) => console.error("Lost the race:", error.message)); // "Timeout exceeded"
