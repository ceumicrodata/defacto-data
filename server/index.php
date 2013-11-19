<?php
$url = "http://projecthost.hu/defacto" . $_SERVER['REQUEST_URI'];
print  file_get_contents($url);
?>