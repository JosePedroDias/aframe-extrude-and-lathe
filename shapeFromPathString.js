'use strict';

var ops = {
    l: 2,
    L: 2,
    m: 2,
    M: 2
};

//var DEG2RAD = Math.PI / 180;

//require('./lib/FontUtils');

var shapeFromPathString = function(d) {
    // http://www.w3.org/TR/SVG/paths.html
    // http://threejs.org/docs/#Reference/Extras.Core/Shape
    
    if (d[0] === '"' || d[0] === "'") {
      d = d.substring(1, d.length-2); // get rid of string delimiters
    }

    var sh = new THREE.Shape();
    var stack = [];
    var op, left, pos = [0, 0];

    d.split(' ').forEach(function(s) {
        var n = parseFloat(s);
        if (isNaN(n)) {
            stack.push(s);
            if (s in ops) {
                op = s;
                left = ops[s];
                stack = [];
            }
        }
        else {
            stack.push(n)
            --left;
        }

        if (left === 0) {
            var OP = op.toUpperCase();
            if (op === 'l' || op === 'm') {
                pos[0] += stack[0];
                pos[1] += stack[1];
            }
            else {
                pos[0] = stack[0];
                pos[1] = stack[1];
            }
            if      (OP === 'L') {sh.lineTo(pos[0], pos[1]); }
            else if (OP === 'M') {sh.moveTo(pos[0], pos[1]); }
        }
    });

    return sh;
};

module.exports = shapeFromPathString;
