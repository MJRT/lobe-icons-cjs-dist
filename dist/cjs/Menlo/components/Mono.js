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

// src/Menlo/components/Mono.tsx
var Mono_exports = {};
__export(Mono_exports, {
  default: () => Mono_default
});
module.exports = __toCommonJS(Mono_exports);
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
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M19.46 1.492L21 3.036V10.5l-1.54 1.51-1.539-1.51V3.036l1.54-1.544zm-7.469 0l1.557 1.544V10.5l-1.557 1.51-1.54-1.51V3.036l1.54-1.544zM4.54 12.01L3 10.499V3.036l1.54-1.544 1.539 1.544V10.5l-1.54 1.51zM3 13.519l1.54-1.51 1.539 1.51v8.971L4.539 24 3 22.49v-8.972zM19.46 24l-1.539-1.51v-8.972l1.54-1.51L21 13.519v8.972L19.46 24zM6.08 0h4.373l1.54 1.492-1.54 1.544H6.079l-1.54-1.544L6.08 0zm7.47 0h4.372l1.54 1.492-1.54 1.544h-4.373l-1.557-1.544L13.548 0z" })
  );
});
var Mono_default = Icon;
