console.log('Hello, world!');

import Kane from './module/Kane.js';

class Main {
  constructor(opts = {}) {
    this.kane = new Kane();
    const $_$ = this.kane;

    var text = 'the__a_r_t of com-pu--ter_pro-gram--ming';

    var parsed = $_$.parse(text, {
      priority: [' ', '_', '-'],
    });

    console.log(parsed);

    var renderedJson = $_$.render(parsed, {
      format: 'json',
    });

    console.log(renderedJson);

    var renderedIndent = $_$.render(parsed, {
      format: 'indent',
    });

    console.log(renderedIndent);
  }
}

window.licker = window.licker || {};
((ns) => {
  ns.main = new Main();
})(window.licker);

console.log('Thanks, world!');

