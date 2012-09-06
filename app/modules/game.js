define([
  "app",

  // Libs
  "backbone",

  // Views
  "modules/game/views",

  "plugins/backbone-localstorage"
],

function(app, Backbone, Views) {
  // Create a new module
  var Game = app.module();

  // Todo Model
  // ----------

  Game.localStorage = new Store("Game");

  Game.getInstance = function(){
     game = new Game.Model();
     game.fetch();
     return game;
  }

  // Our basic **Todo** model has `content` and `done` attributes.
  Game.Model = Backbone.Model.extend({
   
    localStorage: new Store("Game"),
    // Default attributes for the todo.

    defaults: {
       id: 1,
       max_rounds: 50,
       max_cards: 1000,
       round_time_limit: 60,
       number_of_teams: 2,
       started: false,
       teams: []
    },

    storeSettings: function(attributes){
     if(this.get("started")){
      alert('you cannot change game settings during play');
     } else {
      this.save(attributes);
     }
    },

    start: function(){
       this.save({"started": true});
       alert('game started');
    }



  });

  Game.Views = Views;
  // Required, return the module for AMD compliance
  return Game;

});
