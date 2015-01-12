var RootController 		= require('./controllers/index').RootController;

module.exports = function(app, passport) {
	app.get('/', RootController.index);
};