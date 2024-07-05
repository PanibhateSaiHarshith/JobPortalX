// JavaScript code goes here
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function openSignupChoicePopup() {
  document.getElementById("signupChoicePopup").style.display = "block";
  document.querySelector(".main-content").classList.add("blur-background"); // Add blur effect to main content
}

function closeSignupChoicePopup() {
  document.getElementById("signupChoicePopup").style.display = "none";
  document.querySelector(".main-content").classList.remove("blur-background"); // Remove blur effect from main content
}

function openSigninPopup() {
  document.getElementById("signinPopup").style.display = "block";
  document.querySelector(".main-content").classList.add("blur-background"); // Add blur effect to main content
}

function closeSigninPopup() {
  document.getElementById("signinPopup").style.display = "none";
  document.querySelector(".main-content").classList.remove("blur-background"); // Remove blur effect from main content
}

function showStudentSignup() {
  // Implement signup process for students
  alert("Sign Up as Student clicked");
}

function showEmployeeSignup() {
  // Implement signup process for employees
  alert("Sign Up as Employee clicked");
}

function showStudentSignup() {
  closeSignupChoicePopup();
  openSignupPopup("signupStudentPopup");
}

function showEmployeeSignup() {
  closeSignupChoicePopup();
  openSignupPopup("signupEmployeePopup");
}


function openSignupPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closeSignupPopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.getElementById("searchBtn").addEventListener("click", function() {
  var form = document.getElementById("searchForm");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
});

document.getElementById("submitBtn").addEventListener("click", function() {
  var searchInput = document.getElementById("searchInput").value;
  var locationInput = document.getElementById("locationInput").value;
  // Handle search and location inputs
  console.log("Search:", searchInput);
  console.log("Location:", locationInput);
});

