<?php

include_once("autoloader.php");

$cq = New ContentQueries("127.0.0.1","ma_travel_CMS1_db","root","mysql");


  //get all content
  echo(json_encode($cq->getAllContactInfo()));