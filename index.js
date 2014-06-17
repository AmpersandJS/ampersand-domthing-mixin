var AmpersandView = require('ampersand-view');

module.exports = {
    renderWithTemplate: function (context, templateArg) {
        AmpersandView.prototype.renderWithTemplate.apply(this, arguments);
        var self = this;

        this.on('all', function (name, _, value) {
            if (self.el && typeof self.el.update === 'function') {
                if (name.match(/^change:/)) {
                    self.el.update(name.split(':')[1], value);
                }
            }
        });

        return this;
    }
};
