<?php

// Database connection

$conn = new mysqli("localhost","root","","tripswap_db");

// Check connection

if($conn->connect_error){
die("Database connection failed");
}

?>