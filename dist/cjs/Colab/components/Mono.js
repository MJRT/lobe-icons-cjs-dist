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

// src/Colab/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M11.146 6.406l.103.079-1.727 2.959a3.637 3.637 0 00-5.098 0 3.648 3.648 0 00-1.046 2.34l-.006.222c0 .959.379 1.88 1.054 2.56l-.013.014a3.637 3.637 0 005.11-.014l1.764 2.954-.117.084a6.989 6.989 0 01-9.127-.654A7.003 7.003 0 010 12.008a6.975 6.975 0 016.16-6.933l.312-.03a6.988 6.988 0 014.674 1.361zM16.916 5a6.99 6.99 0 014.935 2.063l-.015.018.194.211a6.988 6.988 0 011.73 4.38l.004.305a6.988 6.988 0 01-11.819 4.973 7.002 7.002 0 01-2.043-4.942c0-1.852.736-3.629 2.045-4.94v-.016l.021-.02A6.987 6.987 0 0116.916 5zm.305 3.662L17 8.668a3.637 3.637 0 00-2.627 5.899 3.637 3.637 0 005.096-5.123 3.628 3.628 0 00-2.026-.775l-.22-.007z" })
  );
});
var Mono_default = Icon;
