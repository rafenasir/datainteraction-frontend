// let titleNews = document.getElementById("newsTitle").value;


// let detailNews = document.getElementById("newsBody").value;


function runtheNews() {

}


function postNews() {
    let titleNews = document.getElementById("newsTitle").value;
    let detailNews = document.getElementById("newsBody").value;
    console.log("Title of the News is " + titleNews);
    console.log("Detai of the News Is " + detailNews);

    fetch("http://localhost:3000/api/news", {
            method: "POST",
            body: JSON.stringify({
                title: titleNews,
                body: detailNews,

            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "accept": "application/json"
                    // charset=UTF-8'
            }

        })
        .then(response => response.json())
        .then(json => console.log(json))
}