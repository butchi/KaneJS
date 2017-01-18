import Parser from './Parser.js';
import Renderer from './Renderer.js';

export default class Kane {
  constructor(opts = {}) {
  }

  parse(expr, opts = {}) {
    const parser = new Parser(opts);
    return parser.parse(expr);
  }

  render(expr, opts = {}) {
    const renderer = new Renderer(opts);
    return renderer.render(expr);
  }
}