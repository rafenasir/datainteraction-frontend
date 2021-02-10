function deleteNews() {
    let individualID = document.getElementById("idOfTheNews").innerHTML;
    fetch("http://localhost:3000/api/news", {
        method: "DELETE",
        body: JSON.stringify({
            id: individualID,

        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            // "accept": "application/json"
            // charset=UTF-8'
        }

    })
}