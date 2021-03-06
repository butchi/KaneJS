import CharacterTree from './CharacterTree';

const defaults = {
  priority: [' '],
}

export default class Parser {
  constructor(opts = {}) {
    this.priority = opts.priority || defaults.priority;
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
      delimiter: delimiterArr[0],
    });

    let ret = [];

    let branch = characterTree.branch(str);

    if(typeof branch === 'string') {
      ret = branch;
      return ret;
    }

    branch.forEach((node) => {
      let tmp = this.next(node, delimiterArr.slice(1));
      ret.push(tmp);
    });

    ret.delimiter = delimiterArr[0]; // 本来のデリミターを使いたい

    return ret;
  }
}
