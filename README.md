# [Offcanvas Boilerplate](http://rictorres.com/projects/offcanvas-boilerplate)
A lightweight mobile first approach.

## Demo
- [http://rictorres.com/projects/offcanvas-boilerplate](http://rictorres.com/projects/offcanvas-boilerplate)


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


## Requirements
- [ImageOptim](http://imageoptim.com/)
- [ImageAlpha](http://pngmini.com/)

Using [`grunt-imageoptim`](https://github.com/JamieMason/grunt-imageoptim) to optimise images (see [comparison](http://jamiemason.github.io/ImageOptim-CLI/)), but you can easily disable the task `imageoptim` in [`Gruntfile.js`](https://github.com/rictorres/offcanvas-boilerplate/blob/master/Gruntfile.js).


## Documentation

### General
- Sidebars open with swipe right/left gestures (like Facebook)

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
- Sidebar show/hide is running @ [60fps](http://d.pr/i/tFvP) but when content is added (large images, videos, etc) the FPS [drops](http://d.pr/i/3vl0) considerably
- Using hardware acceleration whenever possible: `translateZ(0)`

### Javascript
- When Javascript is disabled or not loaded, the webapp degrades gracefully
- Support for touch gestures provided by [Hammer.js](https://github.com/EightMedia/hammer.js)
- Using `element.classList` with [fallback](https://gist.github.com/devongovett/1381839) for IE9. [Performance gains?](http://www.youtube.com/watch?v=hZJacl2VkKo)


## Tested on
- Android 4.2.2 Stock Browser on Galaxy S4
- Android 4.2.2 Chrome 31 on Galaxy S4
- Android 4.2.2 Firefox 25 on Galaxy S4
- iOS 7 Safari on iPhone 4
- iOS 7 Chrome on iPhone 4
- MacOSX 10.9 Chrome 33
- MacOSX 10.9 Safari 7
- MacOSX 10.9 Firefox 25
- MacOSX 10.9 Opera 18
- Windows 7 Chrome 31
- Windows 7 Firefox 25
- Windows 7 IE 10
- Windows 7 IE 9


## Author

![Hi](http://gravatar.com/avatar/414738201197c2a837b986748c80e16e?s=90)

**Ricardo Torres** (Front-end Engineer)

- [http://rictorres.com](http://rictorres.com)
- [http://twitter.com/RicardoTorres0](http://twitter.com/RicardoTorres0)
- [http://github.com/rictorres](http://github.com/rictorres)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rictorres/offcanvas-boilerplate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

