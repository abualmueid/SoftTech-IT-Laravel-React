<?php

$hostname = "localhost";
$username = "root";
$password = "";
$database = "class_5";

$connection = mysqli_connect($hostname, $username, $password, $database);
$query = "INSERT INTO teacher (id, name, age, phoneNo) VALUES (2023214, 'Abdur Rashid', 62, 01923658549)";

mysqli_query($connection, $query);