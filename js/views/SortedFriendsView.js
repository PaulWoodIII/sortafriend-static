/*global Backbone _ */

module.exports = Backbone.View.extend({
    initialize: function() {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);

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
            var renderedItemElement = this.template(m.attributes);
            var thisElement = document.createElement('li');
            thisElement.innerHTML = renderedItemElement;
            this.el.appendChild(thisElement);    
        });
        return this;   
    }
});