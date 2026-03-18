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


// Search Tickets from DATABASE

function searchTickets(){

let from = document.getElementById("from").value;
let to = document.getElementById("to").value;

if(from === "" || to === ""){
alert("Please enter both cities");
return;
}

fetch("backend/search_ticket.php?from="+from+"&to="+to)

.then(res => res.json())

.then(data => {

let results = document.getElementById("results");
results.innerHTML = "";

if(data.length === 0){
results.innerHTML = "<p>No tickets available</p>";
return;
}

data.forEach(ticket => {

let card = document.createElement("div");
card.className = "ticket-card";

card.innerHTML = `
<h3>${ticket.transport}</h3>
<p>${ticket.from_city} → ${ticket.to_city}</p>
<p class="price">₹${ticket.price}</p>
<a href="ticket-details.html">
<button class="btn">View Details</button>
</a>
`;

results.appendChild(card);

});

});

}