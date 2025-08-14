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

// src/YouMind/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M3.84 7.847C3.84 6.274 2.53 5 .912 5H0v9.683C0 17.067 1.988 19 4.44 19c2.452 0 4.44-1.933 4.44-4.317v-4.97c0-1.314 1.096-2.38 2.448-2.38 1.352 0 2.448 1.066 2.448 2.38v7.42c0 1.031.86 1.867 1.92 1.867h2.112V9.923C17.808 7.204 15.541 5 12.744 5S7.68 7.204 7.68 9.923V14.8c0 1.031-.86 1.867-1.92 1.867S3.84 15.83 3.84 14.8V7.847zm14.582-.403c1.175.897 1.954 2.29 1.954 3.856v5.833c0 1.031.86 1.867 1.92 1.867H24v-7.234a4.36 4.36 0 00-.025-.466c-.24-2.23-2.179-3.967-4.535-3.967a4.704 4.704 0 00-1.018.11z"
      }
    )
  );
});
var Mono_default = Icon;
