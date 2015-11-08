<?php 

$user = $_POST["user"];
$password = $_POST["password"];

echo $user;
echo $password;

$db = mysqli_connect( 'localhost', 'root', 'root','HD15_sunburst') or die("Cannot connect to the Database");

$query ="select * from users where user_id = '$user' and password ='$password'";

$result = mysqli_query($db,$query) or die("Cannot execute the Select");
if(mysqli_num_rows($result)==1) {
	header( 'Location: http://localhost/HD15_sunburst/dashboard.html?user='.$user) ;
} else {
	header( 'Location: http://localhost/HD15_sunburst/' ) ;
}

mysqli_close($db);

?>