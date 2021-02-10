function deleteNews() {

    fetch("http://localhost:3000/api/news", {
        method: "DELETE",
        body: JSON.stringify({
            id: "7898686a-72a8-4fb9-8481-c52154cd8f20",

        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            // "accept": "application/json"
            // charset=UTF-8'
        }

    })
}

module.export {
    deleteNews
}