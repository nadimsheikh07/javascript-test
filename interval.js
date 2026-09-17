let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("hi");

    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);



const timeoutId = setTimeout(() => {
    console.log("hello")
    clearTimeout(timeoutId)
}, 1000)


for (var i = 0; i < 3; i++) {
    setTimeout((currentI) => { 
        console.log(currentI) 
    }, 0, i);
}