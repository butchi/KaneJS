import Util from './Util';

// from https://github.com/butchi/markright
class CharacterTree {
  constructor(opts = {}) {
    this.delimiter = opts.delimiter || ' ';
  }

  splitStr(str) {
    var res;
    var longest = 0;

    let len = str.length;
    let i;
    let longTmp = 0;

    for(i = 0; i < len; i++) {
      if(str[i] === this.delimiter) {
        longTmp++;
      } else {
        longTmp = 0;
      }

      longest = Math.max(longest, longTmp);
    }

    res = str.split(Util.constantSpace(longest, this.delimiter));

    return res;
  }

  branch(str) {
    var ret = [];
    if(str.indexOf(this.delimiter) !== -1) {
      this.splitStr(str).forEach((elm) => {
        ret.push(this.branch(elm));
      });
      ret.delimiter = this.delimiter;
    } else {
      ret = str;
    }

    return ret;
  }
}

export default CharacterTree;
