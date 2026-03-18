// Dark / Bright Mode Toggle with memory

function darkMode(){

let body = document.body;
let btn = document.getElementById("modeBtn");

body.classList.toggle("dark");

if(body.classList.contains("dark")){
localStorage.setItem("mode","dark");
if(btn) btn.innerText="☀️ Bright Mode";
}
else{
localStorage.setItem("mode","light");
if(btn) btn.innerText="🌙 Dark Mode";
}

}


// Load saved mode when page opens

window.onload = function(){

let mode = localStorage.getItem("mode");
let btn = document.getElementById("modeBtn");

if(mode === "dark"){
document.body.classList.add("dark");
if(btn) btn.innerText="☀️ Bright Mode";
}

}



// Validate Sell Ticket Form

function validateTicket(){

let from = document.getElementById("from_city").value;
let to = document.getElementById("to_city").value;
let price = document.getElementById("price").value;

if(from === "" || to === "" || price === ""){
alert("Please fill all fields");
return false;
}

if(price < 100){
alert("Price must be greater than ₹100");
return false;
}

alert("Ticket submitted successfully!");
return true;

}



// Smart Price Suggestion

function suggestPrice(){

let transport = document.getElementById("transport").value;

let suggestion = document.getElementById("suggestion");

if(transport === "Flight"){
suggestion.innerText = "Suggested price: ₹3000 - ₹5000";
}
else if(transport === "Train"){
suggestion.innerText = "Suggested price: ₹500 - ₹1500";
}
else{
suggestion.innerText = "Suggested price: ₹300 - ₹1200";
}

}