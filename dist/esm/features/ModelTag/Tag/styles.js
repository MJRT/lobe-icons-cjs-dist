var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var prefixCls = _ref.prefixCls,
    css = _ref.css,
    token = _ref.token;
  return {
    borderless: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    background: none;\n    box-shadow: none;\n  "]))),
    filled: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), token.colorFillTertiary),
    large: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    &.", "-tag {\n      height: 28px;\n      padding-inline: 12px;\n      border-radius: 6px;\n    }\n  "])), prefixCls),
    outlined: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    background: ", ";\n  "])), token.colorBorderSecondary, token.colorBgContainer),
    root: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n    &.", "-tag {\n      user-select: none;\n\n      display: flex;\n      gap: 0.4em;\n      align-items: center;\n      justify-content: center;\n\n      width: fit-content;\n      height: 22px;\n      margin: 0;\n      border-radius: 3px;\n\n      line-height: 1.2;\n\n      span {\n        margin: 0;\n      }\n    }\n  "])), token.colorTextSecondary, prefixCls),
    small: css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    &.", "-tag {\n      height: 20px;\n      padding-inline: 4px;\n    }\n  "])), prefixCls)
  };
});