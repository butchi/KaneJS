console.log('Hello, world!');

import Kane from './module/Kane.js';

class Main {
  constructor(opts = {}) {
    const $_$ = new Kane();

    var ret = $_$('the__a_r_t of com-pu-ter_pro-gram-ming', {
      priority: [' ', '_', '-'],
    });
    console.log(ret);

// return:
// `
// ' '
//   '__'
//     the
//     '_'
//       a
//       r
//       t
//   of
//   '_'
//     '-'
//       com
//       pu
//       ter
//     '-'
//       pro
//       gram
//       ming
// `
  }
}

window.licker = window.licker || {};
((ns) => {
  ns.main = new Main();
})(window.licker);

console.log('Thanks, world!');

