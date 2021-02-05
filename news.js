function getNews() {
    fetch('http://localhost:3000/api/news')
        .then(response => response.json())
        .then(json => console.log(json))
}

getNews();