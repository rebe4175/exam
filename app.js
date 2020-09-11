function validateForm() {

    const username = document.forms["signUpForm"]["email"].value;
    const password = document.forms["signUpForm"]["password"].value;

    if (username == "") {
        console.log("Email must be filled out");
        return false;
    }

    if (password == "") {
        console.log("Password must be filled out");
        return false;
    }
}

function showPage(pageId) {
    console.log('showing page...', pageId)
    // <div id="home" class="subpage">page home</div>
    document.querySelectorAll('.subpage').forEach(item => {
        item.style.display = "none"
    })
    document.getElementById(pageId).style.display = "grid"
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

btn.onclick = function () {
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let logInBtn = document.querySelector("#logInBtn");

logInBtn.onclick = function () {

    window.location.href = "login.php";
}

var logOutBtn = document.querySelector(".logout");

logOutBtn.onclick = function () {

    window.location.href = "logout.php";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// async function tweet() {
//     // console.log('tweeting ...')
//     // TODO: validate input fields
//     // Pretend that all the data is valid

//     var data = new FormData(document.querySelector(".formTweet"))


//     let connection = await fetch('api-create-tweet.php', {
//         "method": "POST",
//         "body": data
//     })

//     let sResponse = await connection.text()

//     //  console.log(sResponse)

//     let jResponse = JSON.parse(sResponse) // PHP json_decode

//     console.log(jResponse)

//     for (var i = 0; i < jResponse.length; i++) {
//         var divTweet = `
//         <div class="tweet" id="${jResponse[i].id}">      
//           <div>${jResponse[i].message}</div>
//           <button id="btnDelete" 
//                   onclick="deleteUser('${jResponse[i].id}')"
//           >
//                   DELETE
//           </button>
//         </div>`
//         document.querySelector("#tweets").insertAdjacentHTML('afterbegin', divTweet)

//     }

// }

// async function getTweet() {
//     let connection = await fetch('api-get-tweet.php')
//     let sTweet = await connection.text()
//     let jTweet = JSON.parse(sTweet) // PHP json_decode
//     console.log(jTweet.id, jTweet.message)
// }

async function tweet() {
    console.log('tweeting');
    //TO DO: validate input fields
    //Pretend that data is valid
    let data = new FormData(document.querySelector(".formTweet"));

    let bridge = await fetch('api-create-tweet.php', {
        "body": data,
        "method": "POST"
    })

    if (bridge.status != 200) {
        console.log('error')
    }

    let sResponse = await bridge.text()
    console.log(sResponse)
    let jResponse = JSON.parse(sResponse)
    console.log(jResponse.id)

}



