(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global Backbone */

var Friend = require('app/models/friend');
module.exports = Backbone.Collection.extend({
    model: Friend
});

},{"app/models/friend":2}],2:[function(require,module,exports){
/*global Backbone _ */

module.exports = Backbone.Model.extend({
    idAttribute: "registered",
    up:function(){
        this.set('rank',this.get('rank') + 1);
        console.log(this.get('rank'));
    },
    down:function(){
        this.set('rank',this.get('rank') - 1);
        console.log(this.get('rank'));
    }
});
},{}]},{},[1])