(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global Backbone _ */

module.exports = Backbone.View.extend({
    initialize: function() {
        this.on('change', this.render, this);
    },
    events: {
        'click .up': 'clickUp',
        'click .down': 'clickDown'
    },
    clickUp: function() {
        this.model.up();
    },
    clickDown: function() {
        this.model.down();
    },
    template: _.template(`
    <li>
        <img class="circular" src="<%= picture.medium %>">
        <p class='friend-name'><%= name.first %> <%= name.last%></p>
        <button type="button" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
        </button>
    </li>
    `),
    render: function() {
        this.el.innerHTML = '';
        this.model.forEach((m) => {
            console.log(this.template);
            var renderedItemElement = this.template(m.attributes);
            var thisElement = document.createElement('li');
            thisElement.innerHTML = renderedItemElement;
            this.el.appendChild(thisElement);    
        });
        return this;   
    }
});
},{}]},{},[1])