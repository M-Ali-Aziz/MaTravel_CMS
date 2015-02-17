// wait for DOM ready
$(function(){

	/*
		*Help functions
		*Hide/show/active
		*
	*/

	// hide all sections in main tag 
	$("#mainSection section").hide();


	
	$("#homePageGallery").show();




	// // hide the admin country form
	// $('#add_country').hide();
	// // hide the admin booking form
	// $('#add_booking').hide();
	// // hide the admin contact form
	// $('#add_contact').hide();

	// show the country info when click in the countries menu
	$( "#submenuCounName" ).click(function() {
		$("#mainSection section").hide();
		$("footer").show();
		// $('#add_booking').hide();
		// $('#add_contact').hide();
		$('section #country_content').show();
		return getCountryInfo();
	});

	// show the booking sites when click in the booking menu
	$( "#bookingMenuLink" ).click(function() {
		$("#mainSection section").hide();
		$("footer").show();
		// $('#add_booking').hide();
		// $('#add_contact').hide();
		$('section #booking_content').show();
		return getBookingInfo();
	});

	// show the admin country form when click in the admin menu
	$( "#addNewCounMenuLi" ).click(function() {
		$("#mainSection section").hide();
		$("footer").hide();
		// $('#add_booking').hide();
		// $('#add_contact').hide();
		return $('#add_country').show();
	});

	// show the admin contact form when click in the admin menu
	$( "#addBookingMenuLi" ).click(function() {
		$("#mainSection section").hide();
		$("footer").hide();
		// $('#add_country').hide();
		// $('#add_contact').hide();
		return $('#add_booking').show();
	});

	// show the admin contact form when click in the admin menu
	$( "#addContactMenuLi" ).click(function() {
		$("#mainSection section").hide();
		$("footer").hide();
		// $('#add_country').hide();
		// $('#add_booking').hide();
		return $('#add_contact').show();
	});

	// main menu active effect function
	$(function() {
   $("#menuMainUL li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
  });
	// ------------------------------------------------------------------------------


	/*
		*
		* post and get Contact info
		*
	*/

	// --- POST data to DB ---

	// Add submit handler for contact form
	$('#add_contact form').submit(function(){
		// make the info in an array
		var adminContactInfo = {
			":name" : $(this).find('#ci_name').val(),
			":description" : $(this).find('#ci_body').val(),
			":tel" : $(this).find('#ci_tel').val(),
			":email" : $(this).find('#ci_email').val(),
			":address" : $(this).find('#ci_address').val()
		};
		// console.log('adminContactInfo: ', adminContactInfo);
		/*
		 * or do it with .each()
		// get what the input and textara taps contain
		// with .esch()'as loop'
		$(this).find('input, textarea').each(function(){
			// name the contain with ther corresponding id="..."
			adminContactInfo[this.id] = $(this).val();
		});
		*
		*/

		// AJAX call to send adminContactInfo to DB
		$.ajax({
			url: "php/save_content.php",
			type: "post",
			dataType: "json",
			data:{

				"admin_add_contacts" : adminContactInfo
			},
			success : function(data){
				console.log('success contact data: ', data);
				alert('Your contacts info has been saved!');
			},
			error : function(data){
				console.log('error contact data: ', data);
			}
		});
		// clean up the form inputs in the end
		this.reset();

		// Run function to list all contact info on footer
		getContactInfo();
		
		return false;
	});
	

	// --- GET data from DB and print to html ---

	//function to get contact info from DB.
	function getContactInfo(admin_add_contacts) {
		$.ajax({
			url: "php/get_content.php",
			type: "get",
			dataType: "json",
			data:{
				"admin_add_contacts" : "admin_add_contacts"
				},
			success: getAllContactInfo,
			error: function(data) {
				console.log("getContactInfo error: ", data.responseText);
			}
		});
    return true;
	}

	//function to list new contact info footer(HTML)
	function getAllContactInfo(data) {
		// console.log("getAllContactInfo success(data): ", data);

		//remove all div in <section id="ciFooter"/>
		$("#ciFooter div").remove();
		//and build new div from data
		for (var i = 0; i < data.length; i++) {
			for (var obj in data[i]){
				//create new contact info divs
				var newContactInfo = $('<div class="col-xs-6 col-md-3 ciHolder"/>');
				newContactInfo.append('<div class="thumbnail">'+'<h4>'+data[i].name+
				'</h4>'+'<h4>'+data[i].description+'</h4>'+'<p>'+data[i].tel+'</p>'+
				'<p>'+'<a href="mailto:'+data[i].email+'">'+data[i].email+'</a>'+'</p>'+
				'<p>'+data[i].address+'</p>'+'</div>');
			}
			// console.log("The contact info(data[i]): ", data[i]);
		
			//then append newContactInfo to the #ciFooter section
			$("#ciFooter").append(newContactInfo);
		}
	}

	// Run function to print all contact info on footer
	getContactInfo();
	// ------------------------------------------------------------------------------


	/*
		*
		* post and get Booking sites info
		*
	*/

	// --- POST data to DB ---

	// Add submit handler for Booking sites info
	$('#add_booking form').submit(function(){
		// make the info as an array
		var adminBookingInfo = {
			":name" : $(this).find("#book_name").val(),
			":body" : $(this).find("#book_body").val(),
			":url" : $(this).find("#book_url").val()
		};
		// console.log("adminBookingInfo: ",adminBookingInfo);

		//AJAX call to send adminBookingInfo data to DB
		$.ajax({
			url : "php/save_content.php",
			type : "post",
			dataType : "json",
			data : {
				"admin_add_booking" : adminBookingInfo
			},
			success : function(data){
				console.log("success booking data: ", data);
				alert('Your booking site info has been saved!');
			},
			error : function(data){
				console.log("error booking data: ", data);
			}

		});

		// clean up the form inputs in the end
		this.reset();
		

		return false;
	});


	// --- GET data from DB and print to html ---

	//function to get booking sites info from DB.
	function getBookingInfo(admin_add_booking){
		$.ajax({
			url : "php/get_content.php",
			type : "get",
			dataType : "json",
			data : {
				"admin_add_booking" : "admin_add_booking"
			},
			success : getAllBookingInfo,
			error: function(data) {
				console.log("getContactInfo error: ", data.responseText);
			}
		});
    return true;
	}

	//function to list new booking sites info to(HTML)
	function getAllBookingInfo(data){
		// console.log("getBookingInfo data: ", data);

		// remove all section in <section id="booking_content">
		$('#booking_content section').remove();
		// loop throw all booking info fron DB
		for (var i = 0; i < data.length; i++) {
			for (var obj in data[i]){
				// build html tag to print the booking info
				var newBookingInfo = $('<section/>');
				newBookingInfo.append('<div class="jumbotron">'+'<h1>'+data[i].name+'</h1>'+
				'<p>'+data[i].body+'</p>'+'<p>'+'<a class="btn btn-info btn-lg" href="'+
				data[i].url+'"'+'target="_blank" role="button">'+'Find your ticket'+
				'</a>'+'</p>'+'</div>');
			}
				// just for testing
				// console.log("data[i]: ",data[i]);
				// console.log("data[i].name: ",data[i].name);
				// console.log("data[i].body: ",data[i].body);
				// console.log("data[i].url: ",data[i].url);
				
			// show and print booking data
			$('#booking_content').append(newBookingInfo);
		}
	}

	// Run function to print all booking sites info to html
	getBookingInfo();
	// ------------------------------------------------------------------------------


	/*
		*
		* post and get country info
		*
	*/

	// --- POST data to DB ---

	//Submit handler to get the info from the admin country form
	$('#add_country form').submit(function(){
		// make the data from the form as an array
		var adminCountryInfo = {
			":name" : $("#coun_name").val(),
			":body" :  $("#coun_body").val(),
			":history" :  $("#his_body").val(),
			":geography" :  $("#geo_body").val(),
			":climate" :  $("#cli_body").val(),
			":capital_name" :  $("#cap_name").val(),
			":capital_body" :  $("#cap_body").val(),
			"top1_name" :  $("#top1_name").val(),
			"top1_body" :  $("#top1_body").val(),
			"top2_name" :  $("#top2_name").val(),
			"top2_body" :  $("#top2_body").val(),
			"top3_name" :  $("#top3_name").val(),
			"top3_body" :  $("#top3_body").val(),
			"top4_name" :  $("#top4_name").val(),
			"top4_body" :  $("#top4_body").val(),
			"top5_name" :  $("#top5_name").val(),
			"top5_body" :  $("#top5_body").val()
		};

		console.log("adminCountryInfo: ", adminCountryInfo);


		// AJAX call to post data to DB
		$.ajax({
			url : "php/save_content.php",
			type : "post",
			dataType : "json",
			data : {
				"admin_add_country" : adminCountryInfo
			},
			success : function(data){
				console.log("success saved adminCountryInfo:", data);
			},
			error : function(data){
				console.log("error saved adminCountryInfo:", data);
			}

		});

		return false;
	});


	// --- GET data from DB and print to html ---

	//function to get country info from DB.
	function getCountryInfo(admin_add_country){
		$.ajax({
			url : "php/get_content.php",
			type : "get",
			dataType : "json",
			data : {
				"admin_add_country" : "admin_add_country"
			},
			success : getAllCountryInfo,
			error: function(data) {
				console.log("getCountryInfo error: ", data.responseText);
			}
		});
    return true;
	}

	//function to list new country info to(HTML)
	function getAllCountryInfo(data){
		// console.log("getBookingInfo data: ", data);

		// remove all li in <ul id="submenuCounName">
		$('#submenuCounName li').remove();
		// remove all div in <section id="country_content">
		$('#country_content div').remove();

		// loop throw all country info fron DB
		for (var i = 0; i < data.length; i++) {
			for (var obj in data[i]){
				// build html for menu and print the country name in submenu
				var newCountryName = $(
					'<li><a href="#'+data[i].name+'">'+data[i].name+'</a></li>');
				// build html tag to print the country info
				var newCountryInfo = $(
					'<div id='+data[i].name+'>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].name+'</h3>'+
							'<p>'+data[i].body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>History</h3>'+
							'<p>'+data[i].history+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>Geography</h3>'+
							'<p>'+data[i].geography+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>climate</h3>'+
							'<p>'+data[i].climate+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>Capital</h3>'+
							'<h4>'+data[i].capital_name+'</h4>'+
							'<p>'+data[i].capital_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<h2>Top 5 sights:</h2><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].top1_name+'</h3>'+
							'<p>'+data[i].top1_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].top2_name+'</h3>'+
							'<p>'+data[i].top2_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].top3_name+'</h3>'+
							'<p>'+data[i].top3_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].top4_name+'</h3>'+
							'<p>'+data[i].top4_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'<div class="thumbnail">'+
						'<div class="caption">'+
							'<h3>'+data[i].top5_name+'</h3>'+
							'<p>'+data[i].top5_body+'</p>'+
						'</div>'+
						'</div><br><br>'+

						'</div>');
			}
				// just for testing
				// console.log("data[i]: ",data[i]);
				// console.log("data[i].name: ",data[i].name);
				// console.log("data[i].body: ",data[i].body);
				// console.log("data[i].url: ",data[i].top1_name);
				
			// show and print country name to ul menu 
			$('#submenuCounName').append(newCountryName);
			// show and print country data to body
			$('#country_content').append(newCountryInfo);
		}
	}

	// Run function to print all booking sites info to html
	getCountryInfo();
	// ------------------------------------------------------------------------------



	/*
		*
		* some help functions 
		*
	*/

	// //setup push/pop-state pushPopListeners for <a> tags ----- ???
	// function pushPopListeners() {
	// 	// When we click a link
	// 	$(document).on("click","a",function(event){
	// 		//if the user clicks a real http:// || https:// link,
	// 		if ($(this).attr("href").indexOf("://") >=0) {
	// 		//assume they are leaving the site
	// 		return;
	// }
	// //prevent "empty" urls from affecting browsing
	// if ($(this).attr("href") && $(this).attr("href") !== "#") {
	// 	goTo($(this).attr("href"));
	// }
	// event.preventDefault();
	// });

	// ------------------------------------------------------------------------------






});