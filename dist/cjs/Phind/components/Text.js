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

// src/Phind/components/Text.tsx
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
      viewBox: "0 0 66 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React.createElement("path", { d: "M48.315 11.852a5.528 5.528 0 00-6.132-5.392c-.921.121-1.751.527-2.414 1.12l.01-1.156v-.04H37.2v12.913h2.58v-7.359a3.012 3.012 0 014.731-2.437 3.032 3.032 0 011.28 2.432c.005.178.005.406.005.7V19.333h2.515l.005-7.48zM33.141 2c-.85 0-1.538.69-1.538 1.54a1.539 1.539 0 103.076 0c0-.85-.688-1.54-1.538-1.54zM29.124 11.852A5.528 5.528 0 0023.6 6.424h-.05c-1.139.02-2.171.532-2.965 1.343v-.192s-.006 0-.006.005l.01-1.181V2h-2.58v17.297h2.58v-7.359a3.012 3.012 0 014.731-2.437 3.032 3.032 0 011.28 2.432c.005.178.005.406.005.7V19.302h2.515l.005-7.45zM63.084 16.277V2.07h-2.652V7.84s-.005 0-.005-.005v.375c-.905-.877-2.044-1.485-3.304-1.693a6.222 6.222 0 00-.925-.071 6.578 6.578 0 00-6.31 5.646 6.54 6.54 0 001.25 4.875 6.533 6.533 0 004.32 2.564 6.514 6.514 0 004.868-1.251c.172-.127.334-.264.49-.406l1.848 1.495 1.66-2.067-1.24-1.024zm-6.73.902a4.129 4.129 0 01-4.128-4.14 4.124 4.124 0 016.081-3.634 4.01 4.01 0 011.351 1.16 4 4 0 01.774 1.875 4.129 4.129 0 01-4.078 4.739zM3.25 9.795V24h2.646v-5.762s.005 0 .005.005v-.375c.906.877 2.044 1.485 3.304 1.693.303.045.612.07.926.07a6.578 6.578 0 006.309-5.645 6.54 6.54 0 00-1.25-4.875 6.533 6.533 0 00-4.32-2.565 6.514 6.514 0 00-4.868 1.252 6.32 6.32 0 00-.49.405L3.66 6.713 2 8.781l1.25 1.014zm6.729-.902a4.129 4.129 0 014.128 4.14 4.123 4.123 0 01-6.081 3.634 4.01 4.01 0 01-1.351-1.16 4.002 4.002 0 01-.774-1.876 4.129 4.129 0 014.078-4.739zM31.836 6.364v12.933h2.666V6.364h-2.666z" })),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React.createElement("path", { d: "M0 0h66v24H0z" })))
  );
});
var Text_default = Icon;
