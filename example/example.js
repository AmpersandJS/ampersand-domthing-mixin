//---------- This is the important bit -------------
var domthingMixin = require('../index');
var AmpersandView = require('ampersand-view');

//Extend ampersandview with the mixin, and bind to the template
//which will be precompiled with the domthingify browserify transform
var MyView = AmpersandView.extend(domthingMixin).extend({
    template: require('./templates/foo.dom')
});

//--------- Create a model class to bind to --------
var Model = require('ampersand-state');

var User = Model.extend({
    props: {
        name: 'string'
    }
});

//--------- Render the page ------------------------
document.addEventListener('DOMContentLoaded', function () {
    //create a model
    var model = new User({name: 'Phil'});

    //Trigger some changes on the model
    setInterval(function () {
        if (model.name === 'Phil') {
            model.name = 'Marcus';
        } else {
            model.name = 'Phil';
        }
    }, 1000);

    //initialize view with the model, render, and insert into the dom
    var view = new MyView({ model: model });
    view.render();
    document.body.appendChild(view.el);
});
