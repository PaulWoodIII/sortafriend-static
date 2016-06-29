/*global Backbone */

module.exports = Backbone.Model.extend({
    defaults:{
        "x":0,
        "y":0
    },
    descriptionString:function(){
        return '(' + this.get('x') + this.get('y') + ')';
    },
    logme:function(){
        console.log(this.descriptionString());
    },
    left:function(){
        this.set('x',this.get('x') - 1);
        this.logme();
    },
    right:function(){
        this.set('x',this.get('x') + 1);
        this.logme();
    },
    up:function(){
        this.set('y',this.get('y') + 1);
        this.logme();
    },
    down:function(){
        this.set('y',this.get('y') - 1);
        this.logme();
    }
});