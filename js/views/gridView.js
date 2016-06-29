/*global Backbone _ */

module.exports = Backbone.View.extend({
    initialize: function() {
        this.on('change', this.render);
    },
    events:{
        'click .up':'clickUp',
        'click .down':'clickDown'
    },
    clickUp:function(){
        this.model.up();
    },
    clickDown:function(){
        this.model.down();
    },
    template: _.template(`
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
    <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
    <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
    <span class="grid"></span>`),
    
    render: function() {
        let template = this.template();
        let grid = template.getElementsByClassName('grid')[0];
        grid.textContent = this.model.descriptionString();
        this.el.innerHTML = template;
    }
});

