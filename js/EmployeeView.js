// JavaScript Document


var EmployeeView = function(employee) {
	
	
	this.addLocation = function(event) {
		event.preventDefault();
		console.log('addLocation');
		navigator.geolocation.getCurrentPosition(
			function(position) {
				$('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
			},
			function() {
				alert('Error getting location');
			});
		return false;
	};	
	
	this.addToContacts = function(event) {
		event.preventDefault();
		console.log('addToContacts');
		if (!navigator.contacts) {
			app.showAlert("Contacts API not supported", "Error");
			return;
		}
		var contact = navigator.contacts.create();
		contact.name = {givenName: employee.firstName, familyName: employee.lastName};
		var phoneNumbers = [];
		phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
		phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true); // preferred number
		contact.phoneNumbers = phoneNumbers;
		contact.save();
		return false;
	};		
	

 
     this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        //this.el.on('keyup', '.search-key', this.findByName);
		
		this.el.on('click', '.add-location-btn', this.addLocation);
		this.el.on('click', '.add-contact-btn', this.addToContacts);

		
    };
 
 	// RENDER DE EmployeeView met de gecompilede template
	this.render = function() {
    	this.el.html(EmployeeView.template(employee));
		
    	return this;
	};
	

 
    this.initialize();
	
	
	
	

	
}

	

// DEFINIEER DE TEMPLATES IN INDEX.HTML 
// HANDLEBAR.JS Compiled templates



EmployeeView.template 	= Handlebars.compile($("#employee-tpl").html());
