<?php

include "db.php";   // database connection

$transport = $_POST['transport'];
$from = $_POST['from_city'];
$to = $_POST['to_city'];
$date = $_POST['travel_date'];
$price = $_POST['price'];

$sql = "INSERT INTO tickets (transport, from_city, to_city, travel_date, price)
VALUES ('$transport', '$from', '$to', '$date', '$price')";

if($conn->query($sql)){

echo "Ticket added successfully";

header("Location: ../dashboard.html");
exit();

}
else{

echo "Error adding ticket";

}

?>