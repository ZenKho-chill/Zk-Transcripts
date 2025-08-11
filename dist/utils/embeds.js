"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateInlineIndex = exports.calculateInlineIndex = void 0;

const calculateAmountOfTrue = (array) => {
  // lấy số lượng giá trị true trước endIndex, dừng lại ở giá trị false đầu tiên
  for (let i = array.length - 1; i >= 0; i--) {
    if (!array[i]) {
      return array.length - i;
    }
  }
  return array.length - 1;
}
exports.calculateAmountOfTrue = calculateAmountOfTrue;

function calculateInlineIndex(fields, currentIndex) {
  // Tính toán chỉ mục inline cho trường hiện tại
  const inlineFieldsBefore = fields.slice(0, currentIndex).map((e) => { var _a; return (_a = e.inline) !== null && _a !== void 0 ? _a : false; });
  const amount = (0, exports.calculateAmountOfTrue)(inlineFieldsBefore) + 1;
  return (amount % 3) + 1;
}
exports.calculateInlineIndex = calculateInlineIndex;