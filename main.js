// Selector
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2"); 
const greeting = document.getElementById("greeting"); 
const date = document.getElementById("date");
const name = document.getElementById("name");

// shift+alt+Down Arrow to duplicate code 

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions
function showtime() {
  let today = new Date();
  let hour = today.getHours(); // 8
  let min = today.getMinutes(); // 32
  let sec = today.getSeconds(); // 23
  let todaydate = today.toDateString(); // fri nov 6 2020

  //am Pm Format
  const amPm = hour > 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12; // hour=12%12=0

  // output time
  time1.innerHTML =  new Date().toLocaleTimeString("en-US",{timeZone:'Asia/Kolkata',timeStye:'short',hourCycle:'h24'});
  time2.innerHTML =  new Date().toLocaleTimeString("en-US",{timeZone:'Africa/Accra',timeStye:'short',hourCycle:'h24'});


  date.innerHTML = `${todaydate}`;

  //   hh:mm:ss AM (Required Time Format)
  setTimeout(showtime, 1000);
}
 
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage = 'url("morning.jpg")';
    // greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url("afternoon.jpg")';
    // greeting.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = 'url("night.jpg")';
    // greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

 

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName(); 
showtime();
setGreeting();
