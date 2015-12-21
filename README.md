## aframe extrude and lathe components

Components for [A-Frame](https://aframe.io).  
Based on [aframe-component-boilerplate](https://github.com/ngokevin/aframe-component-boilerplate).

This module offers lathe and extrude components.



### TODO

* once I get decent examples, update README markup and tables accordingly
* support for extrude along path, maybe
* no tests yet
* will probably split the repos in two once both components work properly


### Development

    npm install
    python -m SimpleHTTPServer 5566 &
    cd examples
    npm run build

visit <http://127.0.0.1:5566/examples/basic/index.html>



### Usage

Install.

```bash
npm install aframe-extrude-and-lathe
```

Register.

```js
var aframeCore = require('aframe-core');
var eAndL = require('aframe-extrude-and-lathe');
aframeCore.registerComponent('extrude', eAndL.extrudeComponent);
aframeCore.registerComponent('lathe',   eAndL.latheComponent);
```

Use.

```html
<a-scene>
    <a-entity
        extrude="path:'m0.1,0.1 l-0.2,0 l0,-0.2 l0.2,0 l0,0.2 z'; amount:0.05"
        position="1 1 2"
        material="color:#0A0"></a-entity>

    <a-entity
        lathe="path:'m0.1,-0.3 l0.3,0.3 l-0.3,0.3'; angle:5; steps:2"
        position="-1 1 2"
        rotation="90 0 0"
        material="color:green"></a-entity>
</a-scene>
```



#### extrude

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| path     | define profile shape via syntax akin to [SVG path's d attribute](http://www.w3.org/TR/SVG/paths.html)            | empty. must be defined  |
| amount   | extension of extrusion |  1 |


### lathe

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| path     | define profile shape via syntax akin to [SVG path's d attribute](http://www.w3.org/TR/SVG/paths.html)            | empty. must be defined  |
| startAngle   | start angle for the revolution   |    0 |
| angle        | revolution angle (0>angle>360)   |  360 |
| steps        | number of steps along the angle  |   16 |
