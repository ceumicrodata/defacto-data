<?php

if (!isset($_POST["svg"]))
 die ("No svg submitted.");
  
  $original_filename = "defacto_graph.svg";
  
  //$content_len = (int) filesize($stored_filename); $_POST["svg"];

  @ini_set('zlib.output_compression', 'Off'); 
  header('Pragma: public'); 
  
  header('Last-Modified: '.gmdate('D, d M Y H:i:s') . ' GMT'); 
  header('Cache-Control: no-store, no-cache, must-revalidate'); // HTTP/1.1 
  header('Cache-Control: pre-check=0, post-check=0, max-age=0'); // HTTP/1.1 
  header('Content-Transfer-Encoding: none'); 
  header('Content-Type: application/octetstream; name="' . $original_filename. '"'); //This should work for IE & Opera 
  header('Content-Type: application/octet-stream; name="' . $original_filename . '"'); //This should work for the rest 
  header('Content-Disposition: inline; filename="' . $original_filename . '"'); 
  //header("Content-length: $content_len"); 
  
  $svg = stripslashes ( $_POST["svg"] );
  print "<?xml version=\"1.0\" standalone=\"yes\"?>$svg" ;
  exit();
  
  /*$f = fopen($stored_filename, "rb"); 
  $content_len = (int) filesize($stored_filename); 
  $content_file = fread($f, $content_len); 
  fclose($f);  
  echo $content_file; 
  */


  /*
  $f = fopen($stored_filename, "rb"); 
  while (!feof($f)) {
    echo fread($f, 2<<20);
  }
  fclose($f);  
  exit();*/
 
 
 
 

?>