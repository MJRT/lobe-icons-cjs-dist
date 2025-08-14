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

// src/LG/components/Inner.tsx
var Inner_exports = {};
__export(Inner_exports, {
  default: () => Inner_default
});
module.exports = __toCommonJS(Inner_exports);
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
    /* @__PURE__ */ React.createElement("path", { d: "M19.167 19.18a10.082 10.082 0 002.97-7.169v-.549l-.498.003h-6.68v1.12h6.038l-.002.034a9.038 9.038 0 01-8.993 8.41 8.96 8.96 0 01-6.375-2.642 8.962 8.962 0 01-2.64-6.376c0-2.406.939-4.67 2.64-6.373A8.961 8.961 0 0112 2.998l.572.007V1.882l-.57-.007A10.15 10.15 0 001.864 12.011c0 2.708 1.055 5.253 2.97 7.17A10.079 10.079 0 0012 22.15a10.078 10.078 0 007.171-2.97m-6.6-2.942V6.656h-1.14v10.705h3.529V16.24H12.57zM9.703 8.183a1.533 1.533 0 10-3.066-.01 1.533 1.533 0 003.066.01z" })
  );
});
var Inner_default = Icon;
