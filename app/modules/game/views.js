define([
  "app",

  // Libs
  "backbone"
],

function(app, Backbone) {
  
  var Views = {};

  Views.MainMenu = Backbone.View.extend({
    template: "game/main_menu",

    tagName: "ul",

    // The DOM events specific to an item.
    events: {
      "click #play-button": "play",
    },

    serialize: function() {
      return {
/*        done: this.model.get("done"),
        content: this.model.get("content")
*/
      };
    },

    initialize: function() {
 /*     this.model.on("change", function() {
        this.render();
      }, this);

      this.model.on("destroy", function() {
        this.remove();
      }, this);
 */
    },

    play: function() {
     //Backbone.navigate("team");
    }

  });

  return Views;

});
