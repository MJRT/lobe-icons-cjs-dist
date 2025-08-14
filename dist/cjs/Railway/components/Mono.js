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

// src/Railway/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M.111 10.27c-.057.4-.094.804-.111 1.208h18.23a2.182 2.182 0 00-.236-.346c-3.116-4.026-4.793-3.677-7.19-3.78-.8-.032-1.343-.046-4.525-.046-1.704 0-3.555.005-5.359.01-.233.63-.458 1.24-.568 1.737h9.342v1.217H.11zm18.262 2.426H.01c.02.325.05.645.094.961h16.954c.756 0 1.179-.429 1.316-.96zm-17.318 4.28S3.865 23.878 11.987 24c4.854 0 9.025-2.883 10.92-7.024H1.055z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M11.987 0C7.5 0 3.593 2.465 1.531 6.108c1.611-.003 4.75-.005 4.75-.005h.001v-.001c3.71 0 3.848.016 4.573.046l.45.017c1.562.052 3.484.22 4.996 1.364.82.62 2.005 1.99 2.712 2.965.653.902.84 1.94.396 2.934-.408.913-1.287 1.458-2.352 1.458H.39s.1.42.248.885h22.75a11.96 11.96 0 00.61-3.766C24 5.375 18.623 0 11.988 0z" })
  );
});
var Mono_default = Icon;
