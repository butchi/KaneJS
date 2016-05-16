(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Kane = require('./module/Kane.js');

var _Kane2 = _interopRequireDefault(_Kane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('Hello, world!');

var Main = function Main() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Main);

  var $_$ = new _Kane2.default();

  var ret = $_$('the__a_r_t of com-pu-ter_pro-gram-ming', {
    priority: [' ', '_', '-']
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
};

window.licker = window.licker || {};
(function (ns) {
  ns.main = new Main();
})(window.licker);

console.log('Thanks, world!');

},{"./module/Kane.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// from https://github.com/butchi/markright

var CharacterTree = function () {
  function CharacterTree() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, CharacterTree);

    this.delimiter = opts.delimiter || ' ';
  }

  _createClass(CharacterTree, [{
    key: 'html',
    value: function html(str) {
      var ret;
      var arr;

      arr = this.branch(str);
      ret = this.render(arr);

      return ret;
    }
  }, {
    key: 'render',
    value: function render(tree) {
      var _this = this;

      var ret = '';
      var tmp;

      tree.forEach(function (elm) {
        if (typeof elm === 'string') {
          tmp = elm;
        } else {
          tmp = _this.render(elm);
        }

        ret += _this.wrap(tmp);
      });

      return ret;
    }
  }, {
    key: 'wrap',
    value: function wrap(str) {
      return '<span>' + str + '</span>';
    }
  }, {
    key: 'splitStr',
    value: function splitStr(str) {
      var res;
      var longest = 0;

      var len = str.length;
      var i = void 0;
      var longTmp = 0;

      for (i = 0; i < len; i++) {
        if (str[i] === this.delimiter) {
          longTmp++;
        } else {
          longTmp = 0;
        }

        longest = Math.max(longest, longTmp);
      }

      res = str.split(this.constantSpace(longest));

      return res;
    }
  }, {
    key: 'constantSpace',
    value: function constantSpace(len) {
      var ret = '';
      var i = void 0;

      for (i = 0; i < len; i++) {
        ret += this.delimiter;
      }

      return ret;
    }
  }, {
    key: 'sameArrQ',
    value: function sameArrQ(arr1, arr2) {
      return JSON.stringify(arr1) === JSON.stringify(arr2);
    }
  }, {
    key: 'branch',
    value: function branch(str) {
      var _this2 = this;

      var ret = [];
      if (str.indexOf(this.delimiter) !== -1) {
        this.splitStr(str).forEach(function (elm) {
          ret.push(_this2.branch(elm));
        });
      } else {
        ret = str;
      }

      return ret;
    }
  }]);

  return CharacterTree;
}();

exports.default = CharacterTree;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Parser = require('./Parser.js');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  priority: [' ']
};

var Kane = function Kane() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Kane);

  return function (expr) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? { priority: defaults.priority } : arguments[1];

    var parser = new _Parser2.default({
      priority: opts.priority
    });

    var ret = parser.parse(expr);

    return ret;
  };
};

exports.default = Kane;

},{"./Parser.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CharacterTree = require('./CharacterTree');

var _CharacterTree2 = _interopRequireDefault(_CharacterTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Parser);

    this.priority = opts.priority;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(str) {
      var ret = void 0;

      ret = this.next(str, this.priority);

      return ret;
    }
  }, {
    key: 'next',
    value: function next(str, delimiterArr) {
      var _this = this;

      if (delimiterArr.length === 0) {
        return str;
      }

      var characterTree = new _CharacterTree2.default({
        delimiter: delimiterArr[0]
      });

      var ret = [];

      var branch = characterTree.branch(str);

      if (typeof branch === 'string') {
        console.log(branch, str);
        ret = this.next(str, delimiterArr.slice(1));
        return ret;
      }

      branch.forEach(function (node) {
        var tmp = _this.next(node, delimiterArr.slice(1));
        ret.push(tmp);
      });

      return ret;
    }
  }]);

  return Parser;
}();

exports.default = Parser;

},{"./CharacterTree":2}]},{},[1]);
