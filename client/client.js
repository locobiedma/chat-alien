Template.messages.messages = function () {
	return Messages.find({},{sort:  {time: -1}});
}

Template.input.events = {
	'keydown input#message': function ( event ) {
			if (event.which == 13) {
				if (Meteor.user()) {
					var name = Meteor.user().username;
				} else {
					var name = 'Anonymous';
				}
				var message = $('#message');
				if (message.val() != "") {
					Messages.insert({name: name, message: message.val(), time: Date.now()});
					message.val("");
				}
			}
			if (event.which == 32) {
			    var espacio = $('#message').val()
			    espacio = espacio + " "
			    $('#message').val(espacio)
			}
			if (event.which == 66) {
			    var b = $('#message').val()
			    b = b + "b"
			    $('#message').val(b)
			}
			if (event.which == 78) {
			    var n = $('#message').val()
			    n = n + "n"
			    $('#message').val(n)
			}
	}
}



Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});


// Añadir alien invasion al codigo
//
// Añadir contador de ranking de puntuacion
//
// Deps.autorun --> 
