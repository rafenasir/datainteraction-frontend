// let titleNews = document.getElementById("newsTitle").value;


// let detailNews = document.getElementById("newsBody").value;


function runtheNews() {

}


async function postNews() {
    let titleNews = document.getElementById("newsTitle").value;
    let detailNews = document.getElementById("newsBody").value;
    console.log("Title of the News is " + titleNews);
    console.log("Detai of the News Is " + detailNews);

    await fetch("http://localhost:3000/api/news", {
            method: "POST",
            body: JSON.stringify({
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
    document.getElementById("newsTitle").value = null
    document.getElementById("newsBody").value = null

}



function postAboutUs() {
    let aboutUsBody = document.getElementById("aboutus").value;
    console.log("This is detail about us " + aboutUsBody);

    fetch("http://localhost:3000/api/about_us", {
            method: "POST",
            body: JSON.stringify({
                body: aboutUsBody,

            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                // "accept": "application/json"
            }

        })
        .then(response => response.json())
        .then(json => console.log(json))
}

function postContactUs() {
    let contactUsPhone = document.getElementById("contact-phone").value;
    console.log("This is detail phone " + contactUsPhone);
    let contactUsEmail = document.getElementById("contact-email").value;
    console.log("This is detail phone " + contactUsEmail);
    let contactUsAddress = document.getElementById("contact-address").value;
    console.log("This is detail phone " + contactUsAddress);



    fetch("http://localhost:3000/api/contact_us", {
            method: "POST",
            body: JSON.stringify({
                phone: contactUsPhone,
                email: contactUsEmail,
                address: contactUsAddress
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "accept": "application/json"
            }

        })
        .then(response => response.json())
        .then(json => console.log(json))
}