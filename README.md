# react-image-zoom

## Overview

React component for desktop browsers for image zoom on mouse hover.

## Demo

[Demo](http://malaman.github.io/react-image-zoom/example/index.html)

## Install

```
npm install react-image-zoom --save
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"};
ReactDOM.render(<ReactImageZoom {...props} />, document.getElementById('react-app'));
```

## propTypes

- **width** (number) - width of the source image (required)
- **height** (number) - height of the source image. If not provided, browser calculated
height is used (optional).
- **zoomWidth** (number) - width of the zoomed image. Zoomed image height equals source image height(optional if scale param is provided)
- **img** (string) - url of the source image. Provided if container does not contain img element as a tag(optional)    
- **scale** (number) - zoom scale. if not provided, scale is calculated as natural image size / image size, provided in params (optional if zoomWidth param is provided)
- **offset** (object) - {vertical: number, horizontal: number}. Zoomed image offset (optional)
* **zoomStyle** (string) - custom style applied to the zoomed image (i.e. 'opacity: 0.1;background-color: white;')(optional)

## RouteMap

- [ ] add zoomLensStyle property with custom zoomLens styles
