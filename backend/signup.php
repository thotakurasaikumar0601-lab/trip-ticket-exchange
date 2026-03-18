<?php
include "db.php";

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users(name,username,email,password)
VALUES('$name','$username','$email','$password')";

if(mysqli_query($conn,$sql)){
echo "Signup successful";
header("Location: ../login.html");
}
else{
echo "Error";
}
?>