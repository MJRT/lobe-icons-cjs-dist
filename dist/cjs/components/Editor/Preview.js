var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Editor/Preview.tsx
var Preview_exports = {};
__export(Preview_exports, {
  default: () => Preview_default
});
module.exports = __toCommonJS(Preview_exports);
var import_ui = require("@lobehub/ui");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_IconPreview = __toESM(require("../IconPreview"));
var useStyles = (0, import_antd_style.createStyles)(({ css }) => {
  return {
    code: css`
      flex: 1;
      height: 96px;

      pre {
        padding: 8px !important;
      }

      code {
        font-size: 12px;
        text-wrap: initial;
      }
    `
  };
});
var Preview = (0, import_react.memo)(({ svg, title, precent, ref }) => {
  const { styles } = useStyles();
  return /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { flex: "none", gap: 16, style: { position: "relative", width: "100%" } }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", gap: 8, horizontal: true }, /* @__PURE__ */ React.createElement("h3", { style: { lineHeight: 1, margin: 0 } }, title), precent && /* @__PURE__ */ React.createElement(import_ui.Tag, null, precent)), /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { gap: 8, horizontal: true, ref }, /* @__PURE__ */ React.createElement(import_IconPreview.default, null, svg), /* @__PURE__ */ React.createElement(import_ui.Highlighter, { className: styles.code, language: "tsx" }, svg)));
});
var Preview_default = Preview;
