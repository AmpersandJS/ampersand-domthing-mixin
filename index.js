var AmpersandView = require('ampersand-view');

module.exports = {
    renderWithTemplate: function (context, templateArg) {
        AmpersandView.prototype.renderWithTemplate.apply(this, arguments);
        var self = this;

        if (this.el && typeof this.el.update === 'function') {
            this.model.on('all', function (name, _, value) {
                if (name.match(/^change:/)) {
                    self.el.update('model.' + name.split(':')[1], value);
                }
            });
        }
        return this;
    }
};
