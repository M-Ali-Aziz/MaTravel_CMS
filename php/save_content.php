<?php

include_once("autoloader.php");

$cq = New ContentQueries("127.0.0.1","ma_travel_CMS1_db","root","mysql");

//save content if told to do so (by receiving correct AJAX data)
if (isset($_REQUEST["admin_add_contacts"])) {
  //save page and echo ContentQueries response
  echo(json_encode($cq->saveNewContact($_REQUEST["admin_add_contacts"])));
}elseif (isset($_REQUEST["admin_add_booking"])) {
  //save page and echo ContentQueries response
  echo(json_encode($cq->saveNewBooking($_REQUEST["admin_add_booking"])));
}