const fetchData = new Promise((resolve, reject) => {
    const success = true
    if (success) {
        resolve({
            status: 200
        })
    } else {
        reject({
            status: 404
        })
    }
})


fetchData.then((res) => {
    console.log("res", res)
}).catch((error) => {
    console.log("error", error)
}).finally(() => {
    console.log("finally closed")
})