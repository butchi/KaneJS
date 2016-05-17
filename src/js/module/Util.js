export default {
  wrapHtml: (str, opts = {}) => {
    var tagName = opts.tagName || 'span';
    return `<${tagName}>${str}</${tagName}>`;
  },

  constantSpace: (len, spaceStr = ' ') => {
    var ret = '';
    let i;

    for(i = 0; i < len; i++) {
      ret += spaceStr;
    }

    return ret;
  },

  sameArrQ: (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  },
}
