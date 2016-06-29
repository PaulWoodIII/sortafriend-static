/*global Backbone */

var Friend = require('app/models/Friend');
module.exports = Backbone.Collection.extend({
    initialize: function(models, options) {
        //this.id = options.id;
    },
     parse: function(response) {
        return response.results;
    },
    url: 'https://randomuser.me/api/?results=100',
    model: Friend,
});
