<?php 
 
$user = $_GET["user"];

$db = mysqli_connect( 'localhost', 'root', 'root','HD15_sunburst') or die("Cannot connect to the Database");
$query ="select chart_id,chart_name,chart_json from charts where user = '$user' order by created_dt desc"; 

$resultset = mysqli_query($db,$query) or die("Cannot execute the Select");
$results = array();
 
if ($resultset) {
    while ($record = mysqli_fetch_assoc($resultset)) {
    	$results[] = array("chart_id"=>$record['chart_id'],"chart_name"=>$record['chart_name'],"chart_json"=>$record['chart_json']);
    }
}

echo json_encode($results);
mysqli_close($db);

?>