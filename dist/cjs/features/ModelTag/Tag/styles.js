var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/ModelTag/Tag/styles.ts
var styles_exports = {};
__export(styles_exports, {
  useStyles: () => useStyles
});
module.exports = __toCommonJS(styles_exports);
var import_antd_style = require("antd-style");
var useStyles = (0, import_antd_style.createStyles)(({ prefixCls, css, token }) => ({
  borderless: css`
    border: none;
    background: none;
    box-shadow: none;
  `,
  filled: css`
    background: ${token.colorFillTertiary};
  `,
  large: css`
    &.${prefixCls}-tag {
      height: 28px;
      padding-inline: 12px;
      border-radius: 6px;
    }
  `,
  outlined: css`
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgContainer};
  `,
  root: css`
    color: ${token.colorTextSecondary};
    &.${prefixCls}-tag {
      user-select: none;

      display: flex;
      gap: 0.4em;
      align-items: center;
      justify-content: center;

      width: fit-content;
      height: 22px;
      margin: 0;
      border-radius: 3px;

      line-height: 1.2;

      span {
        margin: 0;
      }
    }
  `,
  small: css`
    &.${prefixCls}-tag {
      height: 20px;
      padding-inline: 4px;
    }
  `
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useStyles
});
