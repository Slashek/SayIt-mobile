define([
  "app",

  // Libs
  "backbone",

  // Views
  "modules/game/views"

],

function(app, Backbone, Views) {
  // Create a new module
  var Game = app.module();

  // Todo Model
  // ----------

  // Our basic **Todo** model has `content` and `done` attributes.
  Game.Model = Backbone.Model.extend({
    // Default attributes for the todo.
    defaults: {
       max_rounds: 50,
       max_cards: 1000,
       round_time_limit: 60,
       number_of_teams: 2,
       started: false
    }
  });

  Game.Views = Views;
  // Required, return the module for AMD compliance
  return Game;

});
