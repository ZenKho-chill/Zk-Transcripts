"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.extend = void 0;

const extend = (addtionalRules, defaultRule) => {
  return Object.assign({}, defaultRule, addtionalRules)
};

exports.extend = extend;