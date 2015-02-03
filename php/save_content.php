<?php

include_once("autoloader.php");

$cq = New ContentQueries("127.0.0.1","ma_travel_CMS1_db","root","mysql");

//save content if told to do so (by receiving correct AJAX data)
if (isset($_REQUEST["admin_add_data"])) {
  //save page and echo ContentQueries response
  echo(json_encode($cq->saveNewPage($_REQUEST["admin_add_data"])));
}