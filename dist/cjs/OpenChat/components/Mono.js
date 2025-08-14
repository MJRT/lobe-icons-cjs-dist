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

// src/OpenChat/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M2.169 8.748l.1-.695C2.513 6.4 3.19 4.94 4.262 3.65a9.76 9.76 0 013.383-2.646C8.812.454 10.04.102 11.35.022c1.136-.07 2.241.029 3.333.324a8.45 8.45 0 011.665.644c.695.358.793.911.229 1.438a22.639 22.639 0 01-4.309 3.188 23.433 23.433 0 01-3.986 1.786 27.94 27.94 0 01-3.64.957c-.449.088-1.274.218-2.474.39z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M4.148 9.181c1.759.41 3.544.66 5.343.789 1.572.113 3.15.11 4.727.036 1.571-.073 3.118-.286 4.658-.569.536-.098 1.055-.262 1.613-.247 1.145.029 1.934.635 2.208 1.715.395 1.551.415 3.105-.007 4.646a9.535 9.535 0 01-2.305 4.101 11.066 11.066 0 01-4.22 2.786c-1.715.64-3.493.846-5.32.68a8.637 8.637 0 01-1.4-.224.36.36 0 00-.292.053C7.93 23.669 6.6 24.01 5.176 24a7.643 7.643 0 01-1.198-.114c-.77-.126-1.044-.823-.568-1.43.26-.33.496-.67.642-1.064.067-.18.13-.361.184-.546a.698.698 0 00-.197-.75c-.886-.861-1.628-1.83-2.143-2.946-1.078-2.334-1.19-4.717-.302-7.136a9.826 9.826 0 01.584-1.275l.072.011c.921.207 1.554.351 1.898.431z" })
  );
});
var Mono_default = Icon;
