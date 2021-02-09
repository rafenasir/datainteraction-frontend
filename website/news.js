// document.write(`\
// <div id = "news" class = "news col-sm-4">\
// <h3 class = "news-title">Title</h3>\
// <p class = "news-body">Body</p>\
// <p class = "date-modified">Date</p>\
// </div>\
// `)


async function getNews() {
    let data = await fetch('http://localhost:3000/api/news')
    let news = await data.json();
    console.log(news);
    createnewsPage(news);
    return news

}



function createnewsPage(news) {
    console.log("entered the function")
    console.log(news);
    for (i = 0; i < news.length; i++) {
        console.log("entered the loop");
        let newsDiv = "<div id ='news' class ='news col-sm-4 col-bg-4'> <h3 id = " + 'news-title' + i + "></h3> <p id =" + 'news-body' + i + "> </p> <p id =" + 'date-modified' + i + "> </p></div>";

        console.log("DEFINED VARIABLE")
        let container = document.getElementById("news-all");
        container.insertAdjacentHTML("beforeend", newsDiv);
        document.getElementById("news-title" + i).innerHTML = news[i].title;
        document.getElementById("news-body" + i).innerHTML = news[i].body;
        document.getElementById("date-modified" + i).innerHTML = news[i].modified;


        console.log(i);
    }
}

async function getContact() {
    let data = await fetch('http://localhost:3000/api/contact_us')
    let contactDetail = await data.json();
    console.log(contactDetail);
    createContactPage(contactDetail)
    return contactDetail

}

function createContactPage(contactDetail) {
    console.log("entered the function")
    console.log(contactDetail);
    document.getElementById("phone-number").innerHTML = contactDetail[0].phone;
    document.getElementById("email-address").innerHTML = contactDetail[0].email;
    document.getElementById("address").innerHTML = contactDetail[0].address;

    console.log(email);


}

async function getAboutUs() {
    let data = await fetch('http://localhost:3000/api/about_us')
    let aboutUs = await data.json();
    console.log(aboutUs);
    createAboutPage(aboutUs)
    return aboutUs
}

function createAboutPage(aboutUs) {
    console.log(aboutUs);
    document.getElementById("aboutus-body").innerHTML = aboutUs[0].body;

}
getContact();
getAboutUs()


// let div = document.createElement("div");
// div.className = "news col-md-4 col-bg-4";
// container.appendChild(div);
// console.log("div created")
// let newsTitle = document.createElement("h3");
// newsTitle.className = "news-title";
// div.appendChild(newsTitle);
// document.getElementsByClassName("news-title").innerHTML = "News Title";
// console.log("Title h3 created")
// let bodyNews = document.createElement("p");
// bodyNews.className = "body-news";
// div.appendChild("bodyNews");
// document.getElementsByClassName("body-news").innerHTML = "Body News";
// let timeUpdated = document.createElement("p");
// timeUpdated.className.add("date-modified");
// div.appendChild("timeUpdated");
// document.getElementsByClassName("date-modified").innerHTML = "date Modified";


//     // for (i = 0; i > news.length; i++) {
// let newsContainer = document.getElementById("news-all");
// let newNews = document.write("<div><h4>Title News</h4><p>This is dynamic HTML generated</p></div>");
// newsContainer.appendChild(newNews);
// console.log(newNews);

// }

// loop ()

// document.create div h3 title p body 

// document.getElementById("title").innerHTML = news[i].title;
// document.getElementById("sample").innerHTML = news[0].body;
// document.getElementById("sample").innerHTML = news[0].body;
// document.getElementById("sample").innerHTML = news[0].body;