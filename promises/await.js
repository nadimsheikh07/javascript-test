const fetchData = new Promise((resolve, reject) => {
    const success = true; // Triggering the rejection
    if (success) {
        resolve({ status: 200 });
    } else {
        reject({ status: 404 });
    }
});


const getData = async () => {
    try {
        const response = await fetchData;
        console.log(response);
    } catch (error) { // Fix: Standard variable declaration instead of an arrow function
        console.log("Caught Error:", error); // Output: Caught Error: { status: 404 }
    }
}



getData();
