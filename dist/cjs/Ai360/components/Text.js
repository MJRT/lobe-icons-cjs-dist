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

// src/Ai360/components/Text.tsx
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      fill: "currentColor",
      fillRule: "evenodd",
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 78 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M17.978 2H2v1.196c0 1.02.827 1.847 1.848 1.847h14.565a3.913 3.913 0 013.913 3.914v1.304H3.956v3.043h18.37v1.848a3.913 3.913 0 01-3.913 3.913H3.848c-1.02 0-1.848.827-1.848 1.848V22h15.978a7.391 7.391 0 007.392-7.391V9.39A7.391 7.391 0 0017.978 2z" }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M27.978 8.957A6.956 6.956 0 0134.935 2h15.87v1.304c0 .96-.78 1.74-1.74 1.74H34.826a3.913 3.913 0 00-3.913 3.913v1.304h15a4.783 4.783 0 014.783 4.783v2.173A4.783 4.783 0 0145.913 22H34.935a6.956 6.956 0 01-6.957-6.957V8.957zm2.935 4.239v1.848c0 2.22 1.8 4.021 4.022 4.021h10.76c1.201 0 2.175-.973 2.175-2.174V15.37c0-1.201-.974-2.174-2.174-2.174H30.913zM60.26 2.109a6.848 6.848 0 00-6.847 6.848v6.195A6.848 6.848 0 0060.261 22h9.13a6.848 6.848 0 006.848-6.848V8.957a6.848 6.848 0 00-6.848-6.848h-9.13zm0 2.934a3.913 3.913 0 00-3.912 3.914v6.195a3.913 3.913 0 003.913 3.913h9.13a3.913 3.913 0 003.913-3.913V8.957a3.913 3.913 0 00-3.913-3.914h-9.13z"
      }
    )
  );
});
var Text_default = Icon;
