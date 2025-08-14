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

// src/components/Dashboard/index.tsx
var Dashboard_exports = {};
__export(Dashboard_exports, {
  default: () => Dashboard_default
});
module.exports = __toCommonJS(Dashboard_exports);
var Icons = __toESM(require("../.."));
var import_ui = require("@lobehub/ui");
var import_antd = require("antd");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_IconItem = __toESM(require("./IconItem"));
var Dashboard = (0, import_react.memo)(() => {
  const theme = (0, import_antd_style.useTheme)();
  const [type, setType] = (0, import_react.useState)("color" /* Color */);
  const [keyword, setKeyword] = (0, import_react.useState)();
  const iconsGroup = (0, import_react.useMemo)(
    () => Object.entries(Icons).filter(([key, Icon]) => {
      if (!Icon.title)
        return false;
      if (keyword && !key.toLowerCase().includes(keyword.toLowerCase()) && !Icon.title.toLowerCase().includes(keyword.toLowerCase()))
        return false;
      return true;
    }),
    [keyword]
  );
  const isMono = type === "mono" /* Mono */;
  return /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { gap: 16, style: { maxWidth: 960 }, width: "100%" }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", gap: 12, horizontal: true }, /* @__PURE__ */ React.createElement(
    import_ui.SearchBar,
    {
      defaultValue: keyword,
      onSearch: (v) => setKeyword(v),
      placeholder: "Search by brand or model keywords...",
      style: { width: "100%" },
      type: "block"
    }
  ), /* @__PURE__ */ React.createElement(
    import_antd.Segmented,
    {
      defaultValue: type,
      onChange: (v) => setType(v),
      options: [
        {
          label: "Color",
          value: "color" /* Color */
        },
        {
          label: "Mono",
          value: "mono" /* Mono */
        }
      ],
      style: {
        border: `1px solid ${theme.colorBorder}`
      }
    }
  )), /* @__PURE__ */ React.createElement(import_ui.Grid, { maxItemWidth: 160, rows: 5 }, iconsGroup.map(([key, Icon]) => {
    const IconRender = isMono ? Icon : Icon.Color || Icon;
    return /* @__PURE__ */ React.createElement(import_IconItem.default, { color: Icon.colorPrimary, id: key, key, title: Icon.title }, /* @__PURE__ */ React.createElement(IconRender, { size: 56 }));
  })));
});
var Dashboard_default = Dashboard;
