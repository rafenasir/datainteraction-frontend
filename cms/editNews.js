function putNews() {
    let titleNews = document.getElementById("editNewsTitle").value;
    let detailNews = document.getElementById("editNewsBody").value;



    fetch("http://localhost:3000/api/news", {
            method: "PUT",
            body: JSON.stringify({
                id: "7898686a-72a8-4fb9-8481-c52154cd8f20",
                title: titleNews,
                body: detailNews,

            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                // "accept": "application/json"
                // charset=UTF-8'
            }

        })
        .then(response => response.json())
        .then(json => console.log(json))
        // window.open("../website/news.html", "-blank");
    document.getElementById("editNewsTitle").value = null
    document.getElementById("editNewsBody").value = null

}