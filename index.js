var shapeFromPathString = require('./shapeFromPathString');



var DEG2RAD = Math.PI / 180;



var getLathe = function(data) {
  // http://threejs.org/docs/#Reference/Extras.Geometries/LatheGeometry
  var shape = shapeFromPathString(data.path);
  var points = shape.getPoints();
  //console.log(points);
  points = points.map(function(p) {
    return new THREE.Vector3(p.x, 0, p.y); // TODO: support different axes
  });
  //console.log(points);

  return new THREE.LatheGeometry(
    points,                    // points
    Math.round(data.steps),    // segments (round so it can be animated)
    data.startAngle * DEG2RAD, // phi start
    data.angle      * DEG2RAD  // phi length
  );
};



var getExtrude = function(data) {
  // http://threejs.org/docs/#Reference/Extras.Geometries/ExtrudeGeometry
  // http://threejs.org/examples/webgl_geometry_extrude_shapes2.html
  // http://stackoverflow.com/questions/25626171/threejs-extrudegeometry-depth-gives-different-result-than-extrudepath
  var shape = shapeFromPathString(data.path);
  console.log(shape);
  return new THREE.ExtrudeGeometry(
    shape,
    {
      amount       : data.amount,
      steps        : Math.round(data.steps),
      bevelEnabled : false
    }
  );
};



/**
 * Lathe component for A-Frame.
 * Use this to create revolutions
 */
module.exports.latheComponent = {
  schema: {
    path       : { default:'m 0.1 -0.3 l 0.3 0.3 l -0.3 0.3' },
    startAngle : { default:  0, min:0, max:360 },
    angle      : { default:360, min:0, max:360},
    steps      : { default: 16, min:1 }
  },

  init: function() {},

  update: function(oldData) {
    /*console.log('update',
        '\noldData', oldData,
        '\nnewData', this.data,
        '\nelement', this.el);*/

    //if (!oldData) {
      var geo = getLathe(this.data);
      this.el.object3D.geometry = geo;
    //}
  },

  remove: function() {}
};



/**
 * Extrude component for A-Frame.
 * Use this to create extrusions
 */
module.exports.extrudeComponent = {
  schema: {
    path   : { default:'m 1 1 l -2 0 l 0 -2 l 2 0 l 0 2' },
    amount : { default:1, min:0 },
    steps  : { default:1, min:1 }
  },

  init: function() {},

  update: function(oldData) {
    /*console.log('update',
        '\noldData', oldData,
        '\nnewData', this.data,
        '\nelement', this.el);*/

    //if (!oldData) {
        var geo = getExtrude(this.data);
        this.el.object3D.geometry = geo;
    //}
  },

  remove: function() {}
};
