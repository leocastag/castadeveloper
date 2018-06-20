$(document).ready( () => {  

	let nameInput = $("#name")
	let mailInput = $("#mail")
	let form = $("#form")
	let comments = $("#comments")
	let message = $("#flashms")
	message.hide();
	let mailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	$(form).submit( (e) => {
		let name = nameInput.val();
		let mail = mailInput.val();
		let formData = $(form).serialize();
		e.preventDefault();

		if (name === "") {

			$(nameInput).attr("placeholder", "Please provide a name");
			$(nameInput).addClass("error");
			return false
		}

		if (!mailRegex.test(mail)) {

			$(mailInput).attr("placeholder", "Please provide a valid email");
			$(mailInput).addClass("error");
			return false
		}

		else {

			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
				.done(function(response) {

    				console.log(response);
					message.slideDown(1000)
						.delay(3000)
						.slideUp();

   					 // Clear the form.
   					 $(nameInput).val('');
   					 $(mailInput).val('');
   					 $(comments).val('');
				})

				.fail(function(data) {

					console.log(data);
   					 $(nameInput).val('');
   					 $(mailInput).val('');
   					 $(comments).val('');

				});

			}

		e.stopPropagation();


	}); // End form function

	//Clear inputs

	$(nameInput).on("click", () => {
		$(nameInput).removeClass("error");
		$(nameInput).attr("placeholder", "Your name...");
	});

	$(mailInput).on("click", () => {
		$(mailInput).removeClass("error");
		$(mailInput).attr("placeholder", "yourmail@email.com");

	});// End

	//Scrooling effect

	$(".navbar a, footer a[href='#home'], #home a").on('click', function(e) {

  		if (this.hash !== "") {

   
   			 e.preventDefault();

    // Store hash
    		var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
   			 $('html, body').animate({
   			   scrollTop: $(hash).offset().top
   			 }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      		window.location.hash = hash;
     		 });
    	} // End if
  	}); //end scrolling effect

	//Slide P effect
	$(window).scroll(function() {
 		 $(".prevtext").each(function(){
    		var pos = $(this).offset().top;

    		var winTop = $(window).scrollTop();
    		if (pos < winTop + 600) {
      			$(this).addClass('slide');
    		}
  		});
	}); //end P effect

	$('.js-trigger').click(function() {
    	$('.navbar-collapse').collapse('hide');
 	 });

	// Delete Brandin 000WebHosting

	$('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').remove();

	}); 

	