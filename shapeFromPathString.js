'use strict';

var ops = {
    l: 2,
    L: 2,
    m: 2,
    M: 2,
    z: 0,
    Z: 0
};

var shapeFromPathString = function(d) {
    // http://www.w3.org/TR/SVG/paths.html
    // http://threejs.org/docs/#Reference/Extras.Core/Shape

    if (d[0] === '"' || d[0] === "'") {
      d = d.substring(1, d.length-1); // get rid of string delimiters
    }

    var sh = new THREE.Shape();
    var stack = [];
    var op, left, pos = [0, 0], firstPos = [0, 0];

    var tokens = d.split(' ');
    tokens.forEach(function(s, i) {
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
            else if (op === 'L' || op === 'M') {
                pos[0] = stack[0];
                pos[1] = stack[1];
            }
            else if (OP === 'Z') {
                pos[0] = firstPos[0];
                pos[1] = firstPos[1];
            }

            if (['M'].indexOf(OP) !== -1) {
                firstPos[0] = pos[0];
                firstPos[1] = pos[1];
            }

            if      (OP === 'L') {sh.lineTo(pos[0], pos[1]); /*console.log('lineTo', pos);*/ }
            else if (OP === 'M') {sh.moveTo(pos[0], pos[1]); /*console.log('moveTo', pos);*/ }
        }
    });

    return sh;
};

module.exports = shapeFromPathString;
