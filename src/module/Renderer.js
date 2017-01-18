import Util from './Util';

export default class Renderer {
  constructor(opts = {}) {
    this.format = opts.format;
  }

  render(kane) {
    let ret;

    if(this.format == null) {
    } else if(this.format === 'json') {
      ret = this.renderJson(kane);
    } else if(this.format === 'html') {
      ret = this.renderHtml(kane);
    } else if(this.format === 'indent') {
      ret = this.renderIndent(kane);
    }

    return ret;
  }

  renderJson(kane) {
    return JSON.stringify(kane);
  }

  renderHtml(kane) {
    var ret = '';
    var tmp;

    kane.forEach((elm) => {
      if(typeof elm === 'string') {
        tmp = elm;
      } else {
        tmp = this.render(elm);
      }

      ret += Util.wrapHtml(tmp);
    });

    return ret;
  }

  renderIndent(kane) {
    const TAB = '  ';
    let ret = '';

    next(kane, 0);
    return ret;

    function next(expr, depth) {
      if(typeof expr === 'string') {
        ret += tabs(depth) + expr + '\n';
      } else {
        ret += tabs(depth) + `'${expr.delimiter}'` + '\n';
        expr.forEach((elm) => {
          next(elm, depth + 1);
        });
      }
    }

    function tabs(len) {
      var ret = '';
      let i;

      for(i = 0; i < len; i++) {
        ret += TAB;
      }

      return ret;
    }
  }

}
