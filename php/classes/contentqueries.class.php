<?php

// new class for the sql queries
// extends = useing all public functions in PDOHelper class
class ContentQueries extends PDOHelper {

	/*
		*
		* $sql to INSERT INTO or SELECT "contact" info to/from DB 
		*
	*/

	// function to save new contactdata to DB
	public function saveNewContact($admin_add_contacts) {

		// sql query
		$sql= "INSERT INTO contact_info (name, description, tel, email, address)
		VALUES (:name, :description, :tel, :email, :address)";
		/*
			inportant info:

			since we are using prepared SQL statements(PDOHelper -> query),
    	SQL and data are sent separately to the query method
		*/

		// insert to the contact_info table in DB
		$this->query($sql, $admin_add_contacts);


    return true;
	}

	// function to get contact info from DB
	public function getAllContactData() {
    $sql = "SELECT name, description, tel, email, address FROM contact_info";
    return $this->query($sql);
  }
  // ------------------------------------------------------------------------------


  /*
		*
		* $sql to INSERT INTO or SELECT "booking" info to/from DB 
		*
	*/

	//finction to save booking data ti DB
	public function saveNewBooking($admin_add_booking){
		//sql query
		$sql = "INSERT INTO booking_sites (name, body, url)
		VALUES (:name, :body, :url)";

		// insert to the booking_sites table in DB
		$this->query($sql, $admin_add_booking);

		return true;
	}
	
	// function to get contact info from DB
	function getAllBookingData(){
		$sql = "SELECT name, body, url FROM booking_sites";
    return $this->query($sql);
	}

  // ------------------------------------------------------------------------------













}