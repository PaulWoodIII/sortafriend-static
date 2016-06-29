/*global Backbone _ */

let AppRouter = require('app/router/router'); 

window.addEventListener('load', function() {
    
    let router = new AppRouter();
    Backbone.history.start();
    Backbone.sync = function(method, model) {
      alert(method + ": " + model.url);
    };
});

// (function() {
//   var proxiedSync = Backbone.sync;
//   Backbone.sync = function(method, model, options) {
//     options || (options = {});
//     if (!options.crossDomain) {
//       options.crossDomain = true;
//     }
//     if (!options.xhrFields) {
//       options.xhrFields = {withCredentials:true};
//     }
//     return proxiedSync(method, model, options);
//   };
// })();