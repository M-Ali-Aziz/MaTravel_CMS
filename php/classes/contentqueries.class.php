<?php

// new class for the sql queries
// extends = useing all public functions in PDOHelper class
class ContentQueries extends PDOHelper {

	// function to save data to DB
	public function saveNewPage($admin_add_data) {

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

}