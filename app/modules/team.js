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
  var Team = app.module();

  // Todo Model
  // ----------

  // Our basic **Todo** model has `content` and `done` attributes.
  Team.Model = Backbone.Model.extend({
    // Default attributes for the todo.
    defaults: {
      name: "Team"
    }
  });

  // Required, return the module for AMD compliance
  return Team;

});
