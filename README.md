## aframe extrude and lathe components

Components for [A-Frame](https://aframe.io).  
Based on [aframe-component-boilerplate](https://github.com/ngokevin/aframe-component-boilerplate).

This module offers lathe and extrude components.



### TODO

* Even though apparently well written, neither extrusions nor lathes are rendering for now?!
* The path syntax is very incomplete. May support curveTo...
* no tests yet
* will probably split the repos in two once they work properly



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
  <a-entity extrude="path:'m 0.1 0.3 l 0.3 -0.3 l -0.3 -0.3'; amount:1" material="color:blue"></a-entity>
  <a-entity lathe="path:'m -0.5 L 1'" material="color:green"></a-entity>
</a-scene>
```



#### extrude

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| path     | define profile shape via syntax akin to [SVG path's d attribute](http://www.w3.org/TR/SVG/paths.html)            | `m 1 1 l -2 0 l 0 -2 l 2 0 l 0 2` |
| amount   | extension of extrusion |  1 |


### lathe

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| path     | define profile shape via syntax akin to [SVG path's d attribute](http://www.w3.org/TR/SVG/paths.html)            | `m -0.5 L 1`  |
| startAngle   | start angle for the revolution   |    0 |
| angle        | revolution angle (0>angle>360)   |  360 |
| steps        | number of steps along the angle  |   16 |
