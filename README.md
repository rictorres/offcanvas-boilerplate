# [Yet Another Weather Webapp](http://rictorres.com/dubizzle-test)
A Dubizzle test.

![Yaww icon](http://rictorres.com/dubizzle-test/assets/img/app/114x114.png)

## Running
```bash
$ git clone https://github.com/rictorres/dubizzle-test
$ cd dubizzle-test
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

Using [`grunt-imageoptim`](https://github.com/JamieMason/grunt-imageoptim) to optimise images (see [comparison](http://jamiemason.github.io/ImageOptim-CLI/)), but you can easily disable the task `imageoptim` in [`Gruntfile.js`](https://github.com/rictorres/dubizzle-test/blob/master/Gruntfile.js).


## Documentation

### HTML
- Sidebar options are set using data attributes: `data-target`, `data-fx`, `data-dir`

### CSS
- CSS guidelines on [GUIDELINES.md](https://github.com/rictorres/dubizzle-test/blob/master/GUIDELINES.md)
- Using a mix of [OOCSS](https://github.com/stubbornella/oocss/wiki) and [SMACSS](http://smacss.com/)
- Toggle sidebar button from [http://codepen.io/rictorres/full/ycudz](http://codepen.io/rictorres/full/ycudz)
- CSS detection provided by [Modernizr](http://modernizr.com)
- Using CSS Flexbox with fallback for IE9
- Sidebar show/hide is running @ [60fps](http://d.pr/i/tFvP) but when content is added (large images, videos, etc) the FPS [drops](http://d.pr/i/3vl0) considerably
- Using hardware acceleration whenever possible: `translateZ(0)`

### Javascript
- No libraries
- When Javascript is disabled or not loaded, the webapp degrades gracefully
- Using `element.classList` with [fallback](https://gist.github.com/devongovett/1381839) for IE9


## Tested on
- Android 4.2.2 Stock Browser on Galaxy S4
- Android 4.2.2 Chrome
- Android 4.2.2 Firefox 25
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

**Ricardo Torres** (Front-end Engineer)

- [http://twitter.com/RicardoTorres0](http://twitter.com/RicardoTorres0)
- [http://github.com/rictorres](http://github.com/rictorres)