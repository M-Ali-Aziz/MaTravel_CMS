// wait for DOM ready
$(function(){

	// hide the admin country form
	$('#add_country').hide();
	// hide the admin booking form
	$('#add_booking').hide();
	// hide the admin contact form
	// $('#add_contact').hide();

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


	// Add submit handler for contact form
	$('#add_contact form').submit(function(){
		// make the info as an array
		var adminContactInfo = {
			":name" : $(this).find('#ci_name').val(),
			":description" : $(this).find('#ci_body').val(),
			":tel" : $(this).find('#ci_tel').val(),
			":email" : $(this).find('#ci_email').val(),
			":address" : $(this).find('#ci_address').val()
		};
		// just to test if it works
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
			},
			error : function(data){
				console.log('error contact data: ', data);

			}

		});

		// clean up the form inputs in the end
		// this.reset();

		return false;
	});















});