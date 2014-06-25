# Ampersand Domthing Mixin

This is a mixin for [AmpersandView](http://github.com/ampersandjs/ampersand-view)s that makes data binding between your models and domthing templates happen automatically.

If you're using this you'll also want to install either [domthing](http://github.com/latentflip/domthing) or [domthingify](http://github.com/latentflip/domthingify) to compile your domthing templates.

## Install

```
npm install ampersand-domthing-mixin --save
```

## Usage

Simples. Typically you'd require this into a BaseView once in your application which you'd then extend for your individual views.

```javascript
// ./views/base-view.js

var domthingMixin = require('ampersand-domthing-mixin');
var AmpersandView = require('ampersand-view');

var BaseView = AmpersandView.extend(domthingMixin, {
    //other base stuff that you want
});

module.exports = BaseView;
```

The mixin extends `renderWithTemplate` to ensure that any events that happen on your view's model(s) are forwarded to domthing to keep your template up to date. This means you should never have to call `el.update('key.path', value)` directly on your domthing template.

## Example

For a full example, also utilising domthingify to compile templates, check out [the example in this repo](./example/example.js)


## License

The MIT License (MIT)

Copyright (c) 2014 Philip Roberts, &yet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
