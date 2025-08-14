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

// src/LG/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12 0a12 12 0 110 24 12 12 0 010-24zm7.167 19.18a10.082 10.082 0 002.971-7.169v-.548l-.499.002h-6.68v1.12h6.038l-.002.034a9.038 9.038 0 01-8.993 8.41 8.957 8.957 0 01-6.375-2.642 8.963 8.963 0 01-2.64-6.376c0-2.406.939-4.67 2.64-6.373A8.961 8.961 0 0112 2.998l.572.007V1.882l-.57-.006A10.15 10.15 0 001.864 12.01c0 2.708 1.055 5.253 2.97 7.17A10.078 10.078 0 0012 22.15a10.08 10.08 0 007.171-2.97m-6.6-2.942V6.657h-1.14v10.705h3.529v-1.123H12.57zM9.704 8.183a1.533 1.533 0 10-3.067-.01 1.533 1.533 0 003.067.01z",
        fill: "#C00C3F"
      }
    )
  );
});
var Color_default = Icon;
