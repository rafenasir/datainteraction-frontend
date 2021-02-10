function putNews() {
    let titleNews = document.getElementById("editNewsTitle").value;
    let detailNews = document.getElementById("editNewsBody").value;
    let individualID = document.getElementById("idOfTheNews").innerHTML;
    console.log(individualID);



    fetch("http://localhost:3000/api/news", {
            method: "PUT",
            body: JSON.stringify({
                id: individualID,
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