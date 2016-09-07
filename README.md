# react-image-zoom

##Overview

React component for desktop browsers for image zoom on mouse hover.

##Demo

[Demo](http://malaman.github.io/react-image-zoom/index.html)

##Install

```
npm install react-image-zoom --save
```

##Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"};
ReactDOM.render(<ReactImageZoom {...props} />, document.getElementById('react-app'));
```

##propTypes

- **width** (number) - width of the source image
- **height** (number) - height of the source image
- **zoomWidth** (number) - width of the zoomed image. Zoomed image height equals source image height
- **img** (string) - url of the source image

##RouteMap

- [ ] offset property - offset in pixels between original image and zoomed image

- [ ] add scale property

