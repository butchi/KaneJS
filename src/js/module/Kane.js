import Parser from './Parser.js';

const defaults = {
  priority: [' '],
}

export default class Kane {
  constructor(opts = {}) {
    return (expr, opts = {priority: defaults.priority}) => {
      const parser = new Parser({
        priority: opts.priority,
      });

      var ret = parser.parse(expr);

      return ret;
    };
  }
}