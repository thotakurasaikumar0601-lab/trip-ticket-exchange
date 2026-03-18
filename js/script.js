// Dark Mode Toggle
function darkMode(){
document.body.classList.toggle("dark");
}


// Simple AI Ticket Recommendation
function recommend(city){

city = city.toLowerCase();

if(city === "hyderabad"){
alert("Recommended: Hyderabad → Bangalore Flight ✈️");
}
else if(city === "chennai"){
alert("Recommended: Chennai → Delhi Train 🚆");
}
else{
alert("No recommendations available yet.");
}

}


// Live Chat System
function sendMsg(){

let msg = document.getElementById("msg").value;

if(msg.trim() === ""){
alert("Enter message");
return;
}

let chatBox = document.getElementById("chat");

let message = document.createElement("p");
message.innerText = msg;

chatBox.appendChild(message);

document.getElementById("msg").value = "";

}


// Simple Button Animation
function exploreTickets(){
window.location.href = "search-ticket.html";
}