async function getNews() {
    let data = await fetch('http://localhost:3000/api/news')
    let news = await data.json();
    // console.log(news);
    createnewsPage(news);
    return news

}

let newsID = [];

function createnewsPage(news) {
    // console.log("entered the function")
    console.log(news);
    for (i = 0; i < news.length; i++) {
        // console.log("entered the loop");
        let newsDiv = "<div id =" + news[i].id + " class ='news col-sm-4 col-bg-4'> <h3 id = " + 'news-title' + i + "></h3> <p id =" + 'news-body' + i + "> </p> <p id =" + 'date-modified' + i + "> </p></div>";

        // console.log("DEFINED VARIABLE")
        let container = document.getElementById("news-all");
        container.insertAdjacentHTML("beforeend", newsDiv);
        document.getElementById("news-title" + i).innerHTML = news[i].title;
        document.getElementById("news-body" + i).innerHTML = news[i].body;
        document.getElementById("date-modified" + i).innerHTML = news[i].modified;
        document.getElementById(news[i].id).addEventListener("click", displaySingleNews);
        newsID.push(news[i].id);

        // console.log(i);
    }
}

async function displaySingleNews(event) {
    let target = event.target;
    let divID = target.parentNode.id;
    // window.open("./individualnews.html");

    console.log(divID);

    let data = await fetch("http://localhost:3000/api/news/" + divID);
    let singleNews = await data.json();
    console.log(singleNews);

    document.getElementById("indNewsTitle").innerHTML = singleNews.title;
    document.getElementById("indNewsDetail").innerHTML = singleNews.body;
    document.getElementById("indNewsDate").innerHTML = "Date " + singleNews.created;
    document.getElementById("idOfTheNews").innerHTML = divID;
    // editSingleNews(divID);

}

function newpage() {
    window.open("./aboutus.html", _blank);
}

// async function editSingleNews(divID) {
//     let newsButton = "<button id=" + divID + " class='btn btn-success edit' onclick=''>Edit</input> <input id=" + divID + " class='btn btn-danger delete'>Delete</input>";
//     let buttonsParent = document.getElementById("indNewsDiv");
//     buttonsParent.insertAdjacentElement("beforeend", newsButton);

// }



async function getContact() {
    let data = await fetch('http://localhost:3000/api/contact_us')
    let contactDetail = await data.json();
    // console.log(contactDetail);
    createContactPage(contactDetail)
    return contactDetail

}

function createContactPage(contactDetail) {
    console.log("entered the function")
        // console.log(contactDetail);
    document.getElementById("phone-number").innerHTML = contactDetail[0].phone;
    document.getElementById("email-address").innerHTML = contactDetail[0].email;
    document.getElementById("address").innerHTML = contactDetail[0].address;

    console.log(email);


}

async function getAboutUs() {
    let data = await fetch('http://localhost:3000/api/about_us')
    let aboutUs = await data.json();
    // console.log(aboutUs);
    createAboutPage(aboutUs)
    return aboutUs
}

function createAboutPage(aboutUs) {
    // console.log(aboutUs);
    document.getElementById("aboutus-body").innerHTML = aboutUs[0].body;

}
getNews();
getContact();
getAboutUs();