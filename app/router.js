define([
  // Application.
  "app"
],

function(app) {

  alert('hi');
  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "*actions": "index"
    },

    index: function() {
     alert('invoked');
    }
  });

  return Router;

});
