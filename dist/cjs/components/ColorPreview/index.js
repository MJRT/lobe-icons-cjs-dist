"use client";
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

// src/components/ColorPreview/index.tsx
var ColorPreview_exports = {};
__export(ColorPreview_exports, {
  default: () => ColorPreview_default
});
module.exports = __toCommonJS(ColorPreview_exports);
var import_ui = require("@lobehub/ui");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var useStyles = (0, import_antd_style.createStyles)(({ css, token, cx }) => {
  return {
    btn: cx(
      "copy-button",
      css`
        position: absolute;
        opacity: 0;
      `
    ),
    container: css`
      position: relative;

      flex: none;

      width: 98px;
      height: 98px;

      background: ${token.colorBgContainer};
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;

      &:hover {
        .copy-button {
          opacity: 1;
        }
      }
    `
  };
});
var IconPreview = (0, import_react.memo)(({ color }) => {
  const { styles } = useStyles();
  return /* @__PURE__ */ React.createElement(import_ui.Tooltip, { title: color }, /* @__PURE__ */ React.createElement(
    import_react_layout_kit.Flexbox,
    {
      align: "center",
      className: styles.container,
      justify: "center",
      style: { background: color }
    },
    /* @__PURE__ */ React.createElement(import_ui.CopyButton, { className: styles.btn, content: color })
  ));
});
var ColorPreview_default = IconPreview;
