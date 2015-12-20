var comps = require('../index.js');

require('aframe-core').registerComponent('lathe',   comps.latheComponent);
require('aframe-core').registerComponent('extrude', comps.extrudeComponent);

setTimeout(function() {
    var els = document.querySelectorAll('a-entity');
    window.els = els;

    var camEl = document.querySelector('[camera]');
    window.camEl = camEl;

    var latheEl = document.querySelector('[lathe]');
    window.latheEl = latheEl;

    var extrudeEl = document.querySelector('[extrude]');
    window.extrudeEl = extrudeEl;

    // a.getAttribute('position') -> prop assigned to the el
    // a.getComputedAttribute('position') -> prop assigned to the el or inherited from default or other
    // a.setAttribute('position', '0 0 -10')
}, 1000);
