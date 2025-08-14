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

// src/Glif/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M19.049 0h-3.903v2.324c-.94-.468-2-.734-3.122-.734C8.151 1.588 5 4.74 5 8.613c0 1.691.601 3.246 1.602 4.46H5v3.902h3.902v-2.072c.94.468 2 .734 3.122.734a7.032 7.032 0 007.025-7.024c0-1.811-.69-3.464-1.819-4.71h1.819V0zm-7.025 11.735a3.126 3.126 0 01-3.122-3.122 3.126 3.126 0 013.122-3.122 3.126 3.126 0 013.122 3.122c0 1.72-1.4 3.122-3.122 3.122zM12.024 16.976H8.902v3.902h3.122A3.126 3.126 0 0115.146 24h3.903a7.032 7.032 0 00-7.025-7.024z" })
  );
});
var Mono_default = Icon;
