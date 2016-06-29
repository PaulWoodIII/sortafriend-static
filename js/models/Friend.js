/*global Backbone _ */

module.exports = Backbone.Model.extend({
    idAttribute: 'registered',
    up:function(){
        this.set('rank',this.get('rank') + 1);
        console.log(this.get('rank'));
    },
    down:function(){
        this.set('rank',this.get('rank') - 1);
        console.log(this.get('rank'));
    }
});