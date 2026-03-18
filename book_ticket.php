<?php
include "db.php";

$ticket_id = $_POST['ticket_id'];
$buyer_id = $_POST['buyer_id'];

$sql = "INSERT INTO bookings(ticket_id,buyer_id)
VALUES('$ticket_id','$buyer_id')";

if(mysqli_query($conn,$sql)){
echo "Ticket booked successfully";
header("Location: ../my-bookings.html");
}
else{
echo "Booking failed";
}
?>