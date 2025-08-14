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

// src/Phind/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M3.723 4.542V24H7.37v-7.893s.007 0 .007.007V15.6c1.249 1.201 2.818 2.034 4.555 2.319.418.062.844.097 1.276.097 4.325-.125 8.07-3.332 8.699-7.733a8.916 8.916 0 00-1.723-6.678A9.017 9.017 0 0014.228.092a9.023 9.023 0 00-6.71 1.715c-.238.173-.46.36-.677.555L4.288.321 2 3.153l1.723 1.389zM13 3.306a5.69 5.69 0 015.392 3.853 5.655 5.655 0 01-3.9 7.275 5.57 5.57 0 01-1.492.194c-.976 0-1.89-.243-2.692-.673a5.519 5.519 0 01-1.863-1.59 5.462 5.462 0 01-1.067-2.568 5.355 5.355 0 01-.063-.826c0-3.131 2.546-5.665 5.685-5.665z" })
  );
});
var Mono_default = Icon;
