// JavaScript Document


var EmployeeView = function(employee) {
 
     this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        //this.el.on('keyup', '.search-key', this.findByName);
    }
 
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
