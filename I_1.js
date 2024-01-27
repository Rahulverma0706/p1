document.addEventListener("DOMContentLoaded", function() {
    var countryButton = document.querySelector('.country1');
    var preferencesBox = document.querySelector('.preferences-box');
    var closeIcon = document.querySelector('.close-icon');

    countryButton.addEventListener('click', function() {
        preferencesBox.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        preferencesBox.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == preferencesBox) {
            preferencesBox.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
var countryButton = document.getElementById('countryButton');
var preferencesBox = document.getElementById('preferencesBox');
var closeIcon = document.querySelector('.close-icon');

countryButton.addEventListener('click', function () {
preferencesBox.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
preferencesBox.style.display = 'none';
});

window.addEventListener('click', function (event) {
if (event.target == preferencesBox) {
  preferencesBox.style.display = 'none';
}
});
});

// -------------------------------Local Storage---------------------------//

let loginBtn = document.querySelector("#login");
let loginData = {
    id : "rahulverma",
    pass : "pass@123"
  }
  function storeData(){
    localStorage.setItem("userLoginData", JSON.stringify(loginData))
}
function loadData(){
    JSON.parse(localStorage.getItem("userLoginData", (loginData)));
}

loginBtn.addEventListener("click", function(){
    let loginid  = document.querySelector("#userid").value;
    let loginpass = document.querySelector("#userpass").value;
    if(loginid == loginData.id && loginpass == loginData.pass){
        alert("Welcome! You logged in");
    }else{
        alert("Wrong Credentials"); 
    }
})

  

