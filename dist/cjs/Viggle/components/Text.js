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

// src/Viggle/components/Text.tsx
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
      viewBox: "0 0 130 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M46.524 2c-5.523 0-10 4.477-10 10s4.477 10 10 10h4.047a9.048 9.048 0 009.048-9.048v-1.428H48.667v2.619h7.53a7.146 7.146 0 01-6.816 5h-1.905a7.143 7.143 0 010-14.286h1.905a7.14 7.14 0 016.187 3.572h3.666A9.052 9.052 0 0050.571 2h-4.047zM2 2.238h4.048l7.38 15.927L20.81 2.238h4.048l-9.286 19.524h-4.285L2 2.238zM28.667 2.238h3.571v19.524h-3.571V2.238zM90.333 2.238h3.572v16.429h12.381v3.095H90.333V2.238zM110.571 2.238h17.143v3.095h-13.571v5.238h12.619v2.62h-12.619v5.476h13.571v3.095h-17.143V2.238zM62.952 12c0-5.523 4.478-10 10-10H77a9.052 9.052 0 018.663 6.429h-3.666a7.14 7.14 0 00-6.188-3.572h-1.904a7.143 7.143 0 100 14.286h1.904a7.146 7.146 0 006.816-5h-7.53v-2.62h10.953v1.43A9.048 9.048 0 0177 22h-4.048c-5.522 0-10-4.477-10-10z" })
  );
});
var Text_default = Icon;
