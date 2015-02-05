// wait for DOM ready
$(function(){

	/*
		*
		*Hide and show 
		*
	*/

	// hide and slideDown(show) the header img
	$('#headerImage').hide();
	$('#headerImage').slideDown(1000);




	// hide the admin country form
	$('#add_country').hide();
	// hide the admin booking form
	$('#add_booking').hide();
	// hide the admin contact form
	$('#add_contact').hide();

	// show the admin country form when click in the admin menu
	$( "#addNewCounMenuLi" ).click(function() {
		$('#add_booking').hide();
		$('#add_contact').hide();
		return $('#add_country').show();
	});

	// show the admin contact form when click in the admin menu
	$( "#addBookingMenuLi" ).click(function() {
		$('#add_country').hide();
		$('#add_contact').hide();
		return $('#add_booking').show();
	});

	// show the admin contact form when click in the admin menu
	$( "#addContactMenuLi" ).click(function() {
		$('#add_country').hide();
		$('#add_booking').hide();
		return $('#add_contact').show();
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
		console.log('adminContactInfo: ', adminContactInfo);
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

				"admin_add_data" : adminContactInfo
			},
			success : function(data){
				console.log('success contact data: ', data);
				// alert('Your contacts info has been saved!');
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
	function getContactInfo(sthData) {
		$.ajax({
			url: "php/get_content.php",
			type: "get",
			dataType: "json",
			data: "",
			success: getAllContactInfo,
			error: function(data) {
				console.log("getContactInfo error: ", data.responseText);
			}
		});
	}

	//function to list new cintact info footer(HTML)
	function getAllContactInfo(data) {
		// console.log("listAllPages success(data): ", data);

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

	// Run function to list all contact info on footer
	getContactInfo();
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