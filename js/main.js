var app = {
	
	initialize: function() {
		var self = this;
		this.store = new WebSqlStore(function() {
			//start de homeview
			$('body').html(new HomeView(self.store).render().el);
		   // self.showAlert('Store Initialized', 'Info');
		});
				
		//zoekfunctie : key up start findbyname fucntion
		$('.search-key').on('keyup', $.proxy(this.findByName, this));
	},		
	
	// NATIVE ALERT INITIALISEREN
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},

};


app.initialize();