
/*
  :: mo · js :: motion graphics toolbelt for the web
  LegoMushroom - Oleg Solomka 2015 MIT
  v0.101.2 unstable
 */
var Burst, MotionPath, Stagger, Swirl, Timeline, Transit, Tween, h, paths;

window.mojs = {
  revision: '0.101.2',
  isDebug: true
};

h = require('./h');

Burst = require('./burst');

Swirl = require('./Swirl');

Transit = require('./transit');

Stagger = require('./stagger');

MotionPath = require('./motion-path');

Timeline = require('./tween/timeline');

Tween = require('./tween/tween');

paths = document.getElementById('js-svg');

new Transit({
  radius: 200,
  isShowInit: true,
  isShowEnd: true,
  x: 300,
  y: 300,
  strokeWidth: 2,
  stroke: 'deeppink',
  strokeDasharray: '7 7 7 7 7 7 7 7 7 100%',
  strokeDashoffset: {
    '100%': 0
  }
});


/* istanbul ignore next */

if ((typeof define === "function") && define.amd) {
  define("mojs", [], function() {
    return mojs;
  });
}


/* istanbul ignore next */

if ((typeof module === "object") && (typeof module.exports === "object")) {
  module.exports = mojs;
}


/* istanbul ignore next */

if (typeof window !== "undefined" && window !== null) {
  window.mojs = mojs;
}
