<?php

$conn = new mysqli("localhost","root","","tripswap");

$from = $_GET['from'];
$to = $_GET['to'];

$sql = "SELECT * FROM tickets 
WHERE from_city LIKE '%$from%' 
AND to_city LIKE '%$to%'";

$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()){
$data[] = $row;
}

echo json_encode($data);

?>