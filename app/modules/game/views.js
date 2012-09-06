define([
  "app",
  "router",
  "backbone"
],

function(app, Router, Backbone) {
  
  var Views = {};

  Views.MainMenu = Backbone.View.extend({
    template: "game/main_menu",

    tagName: "ul",

    // The DOM events specific to an item.
    events: {
    },

    serialize: function() {
      return {
      };
    },

    initialize: function() {
    },

  });

  Views.Settings = Backbone.View.extend({
    template: "game/settings",

    tagName: "div",

    // The DOM events specific to an item.
    events: {
      "click .cancel": "cancel",
      "click .save": "save"
    },

    serialize: function() {
      return {
        max_rounds: this.model.get("max_rounds"),
        max_cards: this.model.get("max_cards"),
        round_time_limit: this.model.get("round_time_limit"),
        number_of_teams: this.model.get("number_of_teams"),
      };
    },

    initialize: function(options) {
     this.model = options.model,
     this.router = options.router
    },

    cancel: function() {
     this.router.navigate("#", true);
    },

    save: function() {
     this.model.storeSettings(this.getAttributes());
     this.router.navigate("#", true);
     //Backbone.navigate("team");
    },

    getAttributes: function(){
     return {      
      "id": 1,
      "max_rounds": $('input[name=max_rounds]').val(),
      "max_cards": $('input[name=max_cards]').val(),
      "round_time_limit": $('input[name=round_time_limit]').val(),
      "number_of_teams": $('input[name=number_of_teams]').val()
      }
    }

  });
  return Views;

});
