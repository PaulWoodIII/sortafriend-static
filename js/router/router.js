/*global Backbone */

var request = require('superagent');
var Friend = require('app/models/Friend');
var SortedFriendsView = require('app/views/SortedFriendsView');
var SortedFriendsCollection = require('app/models/FriendCollection');

module.exports = Backbone.Router.extend({
    initialize: function() {
        let sortedFriendsCollection = new SortedFriendsCollection();

        this.sortedFriendsView = new SortedFriendsView({
            model: sortedFriendsCollection,
            el: document.getElementById('friends-sorted')
        });
        this.sortedFriendsView.render();

        sortedFriendsCollection.fetch({
            success: function(data) {
                console.log(data);
            }
        });

    },
    routes: {
        "sort": "pairSorted"
    },
    pairSorted: function() {

    }
});

/*
{

    //returns a new user in an error first callback function
    getUser: function(cb) {
        request
            .get('https://randomuser.me/api/?results=100')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err) {
                    return cb(err);
                } else {
                    cb(null, res);
                }
            });
    }

};
*/