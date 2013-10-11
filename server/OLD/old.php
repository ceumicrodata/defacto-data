<?php 
$table = isset($_GET["table"]) ? $_GET["table"] : "regions";
$from  = isset($_GET["from"]) ? $_GET["from"] : "2010-01";
$to    = isset($_GET["to"]) ? $_GET["to"] : "2012-01";

print "{\"$table\":[\n";

  $sql = mysql_connect("localhost", "projecthost_hu","18asprojecthost") or die ("Nem tudok kapcsolódni!");
  mysql_selectdb("projecthost_hu_grapp", $sql); 

  $query = "SELECT * FROM `$table` where `date` >= '$from' AND `date` <= '$to'";
  $result = mysql_query($query);

  $first = true;
  while($row = mysql_fetch_object($result)){ 
    if ($first) {
      $first = false;
    } else
      print ",\n";
      
    $primary = "";
    $first2 = true;
    foreach ($row as $key => $value) {
      if ($key == "date")
        $primary = " \"$key\":\"$value\"";
      else {
        if ($first2) {
          $first2 = false;
        } else
          print ",\n";
        
        if ($value === null) {
          $data = " \"value\": 0 ";
          $defined = " \"defined\": 0 ";
        }
        else {
          $data = " \"value\":$value";
          $defined = " \"defined\": 1 ";  
        }

        $serie = " \"serie\":\"$key\"";
        
        print "{\n $primary,\n $serie,\n $data,\n $defined\n}";
      }
    }
  }

print "]}\n";

?>