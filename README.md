# [Offcanvas Boilerplate](http://rictorres.com/projects/offcanvas-boilerplate) [![Build Status](https://secure.travis-ci.org/rictorres/offcanvas-boilerplate.png?branch=master)](https://travis-ci.org/rictorres/offcanvas-boilerplate) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
A lightweight mobile first approach.

## Demo
- [http://rictorres.com/projects/offcanvas-boilerplate](http://rictorres.com/projects/offcanvas-boilerplate)


## Usage
Download latest version or build it from source. (TODO)


## Running
```bash
$ git clone https://github.com/rictorres/offcanvas-boilerplate
$ cd offcanvas-boilerplate
$ npm install
$ grunt server
Started connect web server on 127.0.0.1:9002.
```


## Building
```bash
$ grunt build
```


## Documentation

### HTML
- Sidebar options are set using `data` attributes:
  - `data-target`: 'sidebar-left' or 'sidebar-right'
  - `data-fx`: 'push' or 'slideover'
  - `data-dir`: 'toleft' or 'toright'

### CSS
- CSS guidelines on [GUIDELINES.md](https://github.com/rictorres/offcanvas-boilerplate/blob/master/GUIDELINES.md)
- Using a mix of [OOCSS](https://github.com/stubbornella/oocss/wiki) and [SMACSS](http://smacss.com/)
- Toggle sidebar button from [http://codepen.io/rictorres/full/ycudz](http://codepen.io/rictorres/full/ycudz)
- Feature detection provided by [Modernizr](http://modernizr.com)
- Using CSS Flexbox with fallback for IE9
- Sidebar show/hide is running @ [60fps](http://d.pr/i/tFvP) but when content is added (large images, videos, etc) the frame rate [drops](http://d.pr/i/3vl0) considerably
- Using hardware acceleration whenever possible: `translateZ(0)`

### Javascript
- When Javascript is disabled or not loaded, it degrades gracefully
- Using `element.classList` with [fallback](https://gist.github.com/devongovett/1381839) for IE9. [Performance gains?](http://www.youtube.com/watch?v=hZJacl2VkKo)


## Support
- Latest Chrome, Firefox, Safari, Opera and IE9+
- Chrome, Android Browser and Firefox 25+ on Android 4+
- Chrome and Safari on iOS 7


## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, this app will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit [http://semver.org/](http://semver.org/).


## Author

![Hi](http://gravatar.com/avatar/414738201197c2a837b986748c80e16e?s=90)

**Ricardo Torres** (Front-end Engineer)

- [http://rictorres.com](http://rictorres.com)
- [http://twitter.com/RicardoTorres0](http://twitter.com/RicardoTorres0)
- [http://github.com/rictorres](http://github.com/rictorres)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rictorres/offcanvas-boilerplate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


## License

[MIT License](http://rictorres.mit-license.org/) © Ricardo Torres
