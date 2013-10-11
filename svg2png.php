<?php
error_reporting(E_ALL);

$svg = file_get_contents('graph.svg');
$im = new Imagick();
$im->readImageBlob($svg);


$im->setImageFormat("png24");

//$im->setImageFormat("jpeg");
//$im->adaptiveResizeImage(720, 445); 

$im->writeImage('test.png');
$im->clear();
$im->destroy();

die("ok");
?>