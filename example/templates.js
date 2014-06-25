var templates = {};
templates._runtime = require('domthing/runtime');
templates['foo'] = function (context, runtime) {
  runtime = runtime || this._runtime;
  var template = new runtime.Template();
  (function (parent) {
    (function (parent) {
      var element = document.createElement('div');
      var expr;
      (function (parent) {
        (function (parent) {
          var element = document.createElement('h1');
          var expr;
          (function (parent) {
            (function (parent) {
              var node = document.createTextNode('');
              var expr = (
                runtime.helpers.STREAMIFY_LITERAL.call(template, "Hi ")
              );
              node.data = expr.value;
              expr.on('change', function (text) { node.data = text; });
              parent.appendChild(node);
            })(parent);
            (function (parent) {
              var node = document.createTextNode('');
              var expr = (
                runtime.helpers.STREAMIFY_BINDING.call(template, context, 'model.name')
              );
              node.data = expr.value;
              expr.on('change', function (text) { node.data = text; });
              parent.appendChild(node);
            })(parent);
            (function (parent) {
              var node = document.createTextNode('');
              var expr = (
                runtime.helpers.STREAMIFY_LITERAL.call(template, "!")
              );
              node.data = expr.value;
              expr.on('change', function (text) { node.data = text; });
              parent.appendChild(node);
            })(parent);
          })(element);
          parent.appendChild(element);
        })(parent);
      })(element);
      parent.appendChild(element);
    })(parent);
  })(template.html);
  var firstChild = template.html.firstChild;
  firstChild.update = template.update.bind(template);
  return firstChild;
}.bind(templates);
module.exports = templates;