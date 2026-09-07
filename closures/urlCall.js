function api(url) {
    return function (path) {
        const finalUrl = url + '/' + path
        fetch(finalUrl)
            .then(res => res.json())
            .then(console.log);
    }
}



const myApi = api("https://dummyjson.com")

myApi("test")
myApi("ip")