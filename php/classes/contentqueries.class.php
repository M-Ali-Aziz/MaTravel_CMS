<?php

// new class for the sql queries
// extends = useing all public functions in PDOHelper class
class ContentQueries extends PDOHelper {

	// function to save new contactdata to DB
	public function saveNewContact($admin_add_data) {

		// sql query
		$sql= "INSERT INTO contact_info (name, description, tel, email, address)
		VALUES (:name, :description, :tel, :email, :address)";
		/*
			inportant info:

			since we are using prepared SQL statements(PDOHelper -> query),
    	SQL and data are sent separately to the query method
		*/

		// insert to the contact_info table in DB
		$this->query($sql, $admin_add_data);


    return true;
	}

	// function to get contact info from DB
	public function getAllContactInfo() {
    $sql = "SELECT name, description, tel, email, address FROM contact_info";
    return $this->query($sql);
  }



}