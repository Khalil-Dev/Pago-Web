function getStartedAlert(){
	swal({
		title: "Hey there! We are still in closed BETA.",
		text: "Leave your email in the address below and we will contact you when our platform is open to the public",
		content: "input",					
		className: "alert-bg",
		button: {
	    	text: "Submit",
			closeModal: false,
	  	},
	})
	
}