# fa-svg-icon

> free Font-Awesome SVG icons

## Installation

With [npm](https://www.npmjs.com/) do

```bash
npm install fa-svg-icon
```

## Usage

Import all icons

```javascript
const icon = require('fa-svg-icon')

console.log(icon.solid.addressBook)
```

Import only *solid* icons.

```javascript
const solidIcon = require('fa-svg-icon/solid')

console.log(solidIcon.addressBook)
```

Note that if for example you do not use *brands* and *regular* icons, using
the syntax above will save up to 450kb in your build.
It is possible to refine granularity even more.

Import only *address book solid* icon.

```javascript
const addressBookIcon = require('fa-svg-icon/solid/address-book')

console.log(solidIcon.addressBookIcon)
```

This last approach can take a little time more during development, but if
you are using few icons it can be worth to import only what you need.

## Development

Icons come from [Font-Awesome/svg-with-js/js/](https://github.com/FortAwesome/Font-Awesome/tree/master/svg-with-js/js) folder:

* [brands](https://github.com/FortAwesome/Font-Awesome/blob/master/svg-with-js/js/fa-brands.js)
* [regular](https://github.com/FortAwesome/Font-Awesome/blob/master/svg-with-js/js/fa-regular.js)
* [solid](https://github.com/FortAwesome/Font-Awesome/blob/master/svg-with-js/js/fa-solid.js)

Icon names are camelized: for example Font Awesome name `address-book` is
converted into `addressBook` for JavaScript compatibility.

## License

[Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)

