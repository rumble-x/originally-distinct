// Initialize Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyCshAtyQmnlI_a-AKAq-mtzwpKwSPJnjxU",
//   authDomain: "rumble-x-client.firebaseapp.com",
//   projectId: "rumble-x-client",
//   storageBucket: "rumble-x-client.appspot.com",
//   messagingSenderId: "804489516592",
//   appId: "1:804489516592:web:808ec7fcc85f0486083ff5",
//   measurementId: "G-TNNEBL9LBE",
// };

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

// get visit data
jQuery(function ($) {

  $.getJSON("https://ipapi.co/json/", function (response) {

    db.collection("rumble-visit").doc(unique_id).set({
      url: url,
      country: response.country,
      city: response.city,
      region: response.region,
      timezone: response.timezone,
      time: time,
      ip:response.ip,
      postal:response.postal,
    });
  });
});

// get email,name, phone and handle //

function handleForm(event) {
  // prevent page reload
  event.preventDefault();
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userPhone = document.getElementById("phone").value;
  var selectedService = document.getElementById("dropdownMenuButton").value;
  signupError.innerHTML = "";
  signupSuccess.innerHTML = "";
  if (userEmail.includes("@")) {
    jQuery(function ($) {
      $.getJSON("https://ipapi.co/json/", function (response) {

        db.collection("rumble-x-signup").doc(unique_id).set({
          name:userName,
          email: userEmail,
          phone:userPhone,
          url: url,
          country: response.country,
          city: response.city,
          region: response.region,
          timezone: response.timezone,
          time: time,
          service: selectedService,
          ip:response.ip,
          postal:response.postal,
        });
      });
    });

    jQuery(function ($) {

      $("#signup-success")
        .html("Thanks, we'll be in touch soon!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function ($) {
      $("#signup-error")
        .html("Please make sure you entered your e-mail correctly!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
    return false;
  }
  document.getElementById("email").value = "";
}



// message handle and append

var signupSuccess = document.getElementById("signup-success");
var signupError = document.getElementById("signup-error");

var form = document.getElementById("signup-form");
var pushBtn = document.getElementById("push-btn");

form.addEventListener("submit", handleForm);
