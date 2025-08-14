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

// src/Flora/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M2 17.152c0-2.697 2.202-4.883 4.889-4.883 2.66 0 4.84 2.165 4.84 4.835s-2.156 4.835-4.816 4.835H2v-4.787zM22 22h-4.913c-2.66 0-4.817-2.165-4.817-4.835s2.18-4.835 4.84-4.835c2.688 0 4.89 2.186 4.89 4.883V22zM22 6.848c0 2.697-2.202 4.883-4.889 4.883-2.66 0-4.84-2.165-4.84-4.835s2.156-4.835 4.816-4.835H22v4.787zM2 2h4.913c2.66 0 4.817 2.165 4.817 4.835S9.55 11.67 6.889 11.67C4.202 11.67 2 9.484 2 6.787V2z" })
  );
});
var Mono_default = Icon;
