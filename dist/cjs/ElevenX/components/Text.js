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

// src/ElevenX/components/Text.tsx
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
      viewBox: "0 0 41 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M23.038 22l5.788-7.412-5.788-7.504h4.44l3.645 4.778 3.461-4.778h4.41l-5.757 7.504L38.995 22h-4.41l-3.707-4.778-3.4 4.778h-4.44zM16.96 2h2.726v20h-3.614V6.319a9.634 9.634 0 01-1.593.566c-.52.133-1.041.2-1.562.2V3.622a8.094 8.094 0 002.021-.474c.654-.256 1.328-.639 2.022-1.149zM6.043 2h2.726v20H5.155V6.319a9.637 9.637 0 01-1.593.566c-.52.133-1.041.2-1.562.2V3.622a8.094 8.094 0 002.021-.474C4.675 2.893 5.35 2.51 6.043 2z" })
  );
});
var Text_default = Icon;
