define([
  // Application.
  "app",

  // Modules.
  "modules/game",
  "modules/todo",
  "modules/card",
  "modules/team"
],

function(app, Game, Todo, Card, Team) {
  // An example Backbone application contributed by
  // [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
  // [LocalStorage adapter](backbone-localstorage.js)
  // to persist Backbone models within your browser.
  // Defining the application router, you can attach sub routers here.

  var Router = Backbone.Router.extend({

    routes: {
      "": "index",
      "game/settings": "settings",
      "game/play": "play"
    },

    index: function() {
      app.useLayout("main").setViews({
        // Attach the root content View to the layout.
        ".app-body": new Game.Views.MainMenu({
          //collection: list
        })
      }).render();
    },

    settings: function(){
     app.useLayout("main").setViews({
      ".app-body": new Game.Views.Settings({
       model: Game.getInstance(),
       router: this
      })
     }).render();
    },

    play: function(){
     var game = Game.getInstance();
     if(game.get("started")){
       var conf = confirm("Are you sure you want to overwrite your existing game?");
       if(conf){
         game.start();
       } else {
         alert('no game');
         this.navigate("#");
       }
     } else {
      game.start();
     }
    }
  
  });

  return Router;

});
