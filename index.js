var shapeFromPathString = require('./shapeFromPathString');



var DEG2RAD = Math.PI / 180;



var getLathe = function(data) {
  // http://threejs.org/docs/#Reference/Extras.Geometries/LatheGeometry
  var shape = shapeFromPathString(data.path);
  return new THREE.LatheGeometry(
    shape.getPoints(),         // points
    data.steps,                // segments
    data.startAngle * DEG2RAD, // phi start
    data.angle      * DEG2RAD  // phi length
  );
};



var getExtrude = function(data) {
  // http://threejs.org/docs/#Reference/Extras.Geometries/ExtrudeGeometry
  var shape = shapeFromPathString(data.path);
  return new THREE.ExtrudeGeometry(
    shape,
    {
      amount: data.amount
    }
  );
};



/**
 * Lathe component for A-Frame.
 * Use this to create revolutions
 */
module.exports.latheComponent = {
  schema: {
    path       : { default:'m -0.5 L 1' },
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

    if (!oldData) {
      this.el.object3D.geometry = getLathe(this.data);
    }
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
    amount : { default:1, min:0 }
  },

  init: function() {},

  update: function(oldData) {
    /*console.log('update',
        '\noldData', oldData,
        '\nnewData', this.data,
        '\nelement', this.el);*/

    if (!oldData) {
      this.el.object3D.geometry = getExtrude(this.data);
    }
  },

  remove: function() {}
};
