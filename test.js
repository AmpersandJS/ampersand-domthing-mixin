var domthingMixin = require('./index');

var View = require('ampersand-view');
var Model = require('ampersand-state');
var templates = require('./templates');


var User = Model.extend({
    props: {
        name: 'string'
    }
});

var MyView = View.extend(domthingMixin).extend({
    template: templates.foo
});

document.addEventListener('DOMContentLoaded', function () {
    var model = new User({name: 'Phil'});

    setInterval(function () {
        console.log(model.name);
        if (model.name === 'Phil') {
            model.name = 'Marcus';
        } else {
            model.name = 'Phil';
        }
    }, 1000);

    var view = new MyView({ model: model });

    view.render();
    document.body.appendChild(view.el);
});
