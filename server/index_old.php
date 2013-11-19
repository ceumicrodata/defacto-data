<?php 

$table = isset($_GET["table"]) ? $_GET["table"] : "countries";
$dateKey  = isset($_GET["dateKey"]) ?  $_GET["dateKey"]  : "date";
$serieKey = isset($_GET["serieKey"]) ? $_GET["serieKey"] : "country";
$valueKey = isset($_GET["valueKey"]) ? $_GET["valueKey"] : "uemp";
$filter   = isset($_GET["filter"]) ? $_GET["filter"] : "";
$join     = isset($_GET["join"]) ? $_GET["join"] : "";
$from  = isset($_GET["from"]) ? $_GET["from"] : "2010-01";
$to    = isset($_GET["to"]) ? $_GET["to"] : "2012-01";

  print "{\"$table\":[\n";

  $sql = mysql_connect("localhost", "projecthost_hu","18asprojecthost") or die ("Nem tudok kapcsolódni!");
  mysql_selectdb("projecthost_hu_grapp", $sql); 
  
  $join = ($join != "")  ? "INNER JOIN ". stripslashes(urldecode($join)) : ""; 
  $filter = ($filter != "")  ? "AND ". stripslashes(urldecode($filter)) : ""; 
 
  $query = "SELECT * FROM `$table`$join WHERE `date` >= '$from' AND `date` <= '$to' $filter";
  //die($query);
  
  $result = mysql_query($query);
  $first = true;
  while($row = mysql_fetch_object($result)){ 
  
    if ($first) {
      $first = false;
    } else
      print ",\n";
      
    $defined = ($row->$valueKey === null) ? 0 : 1;
    $data = ($row->$valueKey === null) ? 0 : $row->$valueKey;
    
    print "{\n";
    print " \"$dateKey\" : \"".$row->$dateKey."\" , \n";
    print " \"$valueKey\" : $data, \n";
    print " \"$serieKey\" : \"".$row->$serieKey."\" , \n";
    //if ($filterKey != "")
   //   print " \"$filterKey\" : \"".$row->$filterKey."\" , \n";
   
    print " \"defined\" : $defined \n";
    print "}";

  }

print "]}\n";

?>