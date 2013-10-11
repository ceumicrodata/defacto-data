<?php 
$table = isset($_GET["table"]) ? $_GET["table"] : "regions";

  $sql = mysql_connect("localhost", "projecthost_hu","18asprojecthost") or die ("Nem tudok kapcsolódni!");
  mysql_selectdb("projecthost_hu_grapp", $sql); 

  $query = "SELECT * FROM `$table`";
  $result = mysql_query($query);

  while($row = mysql_fetch_object($result)){ 

      
    $primary = "";
    foreach ($row as $key => $value) {
      if ($key == "date")
        $primary = $value;
      else {
        
        if ($value === null) {
          $data = "NULL";
          $defined = 0;
        }
        else {
          $data = $value;
          $defined = 1;
        }

        $serie = $key;
        
        print "$primary,$serie,$data\n";
      }
    }
  }


?>