"use client";
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

// src/components/Dashboard/Text.tsx
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
var Icons = __toESM(require("../.."));
var import_storybook = require("@lobehub/ui/storybook");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_IconPreview = __toESM(require("../IconPreview"));
var data = Object.values(Icons).filter((icon) => icon == null ? void 0 : icon.colorPrimary);
var useStyles = (0, import_antd_style.createStyles)(({ css, token }) => ({
  item: css`
    height: 96px;
    padding: 16px;
    border: none;
    background: ${token.colorBgContainer};
  `
}));
var Dashboard = (0, import_react.memo)(({ className }) => {
  const { styles } = useStyles();
  const store = (0, import_storybook.useCreateStore)();
  const { size, color } = (0, import_storybook.useControls)(
    {
      color: {
        color: true,
        value: "#ffffff"
      },
      size: {
        max: 96,
        min: 16,
        step: 1,
        value: 24
      }
    },
    { store }
  );
  return /* @__PURE__ */ React.createElement(import_storybook.StoryBook, { className, levaStore: store }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", gap: 4, horizontal: true, justify: "center", style: { flexWrap: "wrap" } }, data.map((Icon, index) => {
    const IconRender = Icon.Text || Icon.Brand;
    if (!IconRender)
      return null;
    return /* @__PURE__ */ React.createElement(import_IconPreview.default, { className: styles.item, key: index }, /* @__PURE__ */ React.createElement(IconRender, { color: color === "#ffffff" ? void 0 : color, size }));
  })));
});
var Text_default = Dashboard;
