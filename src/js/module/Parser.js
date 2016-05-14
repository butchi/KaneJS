import CharacterTree from './CharacterTree';

export default class Parser {
  constructor(opts = {}) {
    this.priority = opts.priority;
  }

  parse(str) {
    let ret;

    ret = this.next(str, this.priority);

    return ret;
  }

  next(str, delimiterArr) {
    if(delimiterArr.length === 0) {
      return str;
    }

    const characterTree = new CharacterTree({
      // delimiter: delimiterArr.shift(),
      delimiter: delimiterArr[0],
    });

    let ret = [];

    let branch = characterTree.branch(str);

    if(typeof branch === 'string') {
      ret = this.next(str, delimiterArr.slice(1));
      return ret;
    }

    branch.forEach((node) => {
      let tmp = this.next(node, delimiterArr.slice(1));
      ret.push(tmp);
    });

    return ret;
  }
}
