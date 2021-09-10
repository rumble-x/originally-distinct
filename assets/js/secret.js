// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCshAtyQmnlI_a-AKAq-mtzwpKwSPJnjxU",
  authDomain: "rumble-x-client.firebaseapp.com",
  projectId: "rumble-x-client",
  storageBucket: "rumble-x-client.appspot.com",
  messagingSenderId: "804489516592",
  appId: "1:804489516592:web:808ec7fcc85f0486083ff5",
  measurementId: "G-TNNEBL9LBE",
};

firebase.initializeApp({
  apiKey: "AIzaSyCshAtyQmnlI_a-AKAq-mtzwpKwSPJnjxU",
  authDomain: "rumble-x-client.firebaseapp.com",
  projectId: "rumble-x-client"
});

var db = firebase.firestore();

// Initialize Firebase
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var myFirebaseRef = firebase.database().ref();
var url = window.location.href;
var unique_id = Math.random().toString(36).slice(2);
var time = Date();


//
var shoeSuccess = document.getElementById("shoe-success");
var shoeError = document.getElementById("shoe-error");

var consultSuccess = document.getElementById("consult-success");
var consultError = document.getElementById("consult-error");


// var vipButton = document.getElementById("vip-button");
// var consultButton = document.getElementById("consult-button");

function handleVip(event) {
  // prevent page reload
  event.preventDefault();
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userPhone = document.getElementById("phone").value;
  var userShoe = document.getElementById("shoesize").value;
  console.log(userName);
  console.log(userEmail);
  console.log(userPhone);
  console.log(userShoe);
  shoeSuccess.innerHTML = "";
  shoeError.innerHTML = "";
  if (userEmail.includes("@")) {



        db.collection("og-shoe").doc(unique_id).set({
          name:userName,
          email: userEmail,
          phone:userPhone,
          time: time,
          shoe: userShoe,
        });


    jQuery(function ($) {

      $("#shoe-success")
        .html("Thanks, we'll be in touch soon!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function ($) {
      $("#shoe-error")
        .html("Please make sure you entered your e-mail correctly!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
    return false;
  }
  document.getElementById("email").value = "";
};






function handleConsult(event) {
  // prevent page reload
  event.preventDefault();
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userPhone = document.getElementById("phone").value;
  var userMessage = document.getElementById("message").value;
  consultSuccess.innerHTML = "";
  consultError.innerHTML = "";
  if (userEmail.includes("@")) {
    jQuery(function ($) {
      $.getJSON("https://ipapi.co/json/", function (response) {

        db.collection("og-consult").doc(unique_id).set({
          name:userName,
          email: userEmail,
          phone:userPhone,
          time: time,
          shoe: userShoe,
        });
      });
    });

    jQuery(function ($) {

      $("#consult-success")
        .html("Thanks, we'll be in touch soon!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function ($) {
      $("#consult-error")
        .html("Please make sure you entered your e-mail correctly!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
    return false;
  }
  document.getElementById("email").value = "";
};




// // message handle and append

//
var vipForm = document.getElementById("vip-form");
var consultForm = document.getElementById("consult-form");

vipForm.addEventListener("submit", handleVip);
consultForm.addEventListener("submit", handleConsult);
