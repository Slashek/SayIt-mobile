define([
  "app",

  // Libs
  "backbone",

  // Views
  //"modules/card/views",

  // Plugins
  "plugins/backbone-localstorage"
],

function(app, Backbone) {
  // Create a new module
  var Card = app.module();

  // Todo Model
  // ----------

  // Our basic **Todo** model has `content` and `done` attributes.
  Card.Model = Backbone.Model.extend({
    // Default attributes for the todo.
    defaults: {
      name: "Sayit"
    }
  });

  // Required, return the module for AMD compliance
  return Card;

});
