require.config({

deps: ["main"],

paths: {

libs: "../assets/js/libs",
plugins: "../assets/js/plugins",
vendor: "../assets/js/vendor",
configs: "configs",
// Libraries
jquery: '../assets/js/libs/jquery',
lodash: '../assets/js/libs/lodash',
backbone: '../assets/js/libs/backbone'
},
shim: {
backbone: {
deps: ["lodash", "jquery"],
exports: "Backbone"
},
'configs/jquery.mobile-config': ['jquery'],
  'plugins/jquery.mobile': ['jquery','configs/jquery.mobile-config'],
  'plugins/backbone.layoutmanager': ['backbone']
  }
});
