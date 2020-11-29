<?php
/*File Name: hello.php
Author: Kyle Carlton Larson
Purpose to test out backend funcitonality
the below have been adopted from Connecting to MySQL with PHP Chapter 18 by Julie C Meloni
echo "Hello World";*/
$mysqli = new mysqli("localhost", "testuser", "somepass". "testDB");

if(mysqli_connect_errno()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
} else {
	printf("Host information: %S\n", mysqli_get_host_info($mysqli));
}
?>
