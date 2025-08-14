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

// src/AlephAlpha/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M2.373 4.301L1 7.663a4.608 4.608 0 012.602 2.602c.976 2.422-.18 5.169-2.566 6.145L2.41 19.77c2.096-.867 3.723-2.494 4.554-4.59A8.346 8.346 0 002.374 4.3zM5.916 21.072L8.084 24c1.049-.759 1.988-1.699 2.783-2.71l-2.819-2.242a11.324 11.324 0 01-2.132 2.024zM14.157 12.036c0-4.699-2.277-9.144-6.073-11.928L5.916 3.036c2.891 2.096 4.59 5.458 4.626 9.036A14.81 14.81 0 0016.578 24l2.133-2.928c-2.856-2.132-4.554-5.458-4.554-9.036zM18.82 2.964L16.722 0a14.601 14.601 0 00-2.964 2.82l2.82 2.24a11.256 11.256 0 012.24-2.096zM21.277 14.06c-1.12-2.421-.036-5.313 2.386-6.433l-1.518-3.29a8.457 8.457 0 00-4.193 4.265c-1.916 4.265 0 9.29 4.301 11.17l1.482-3.29a4.862 4.862 0 01-2.458-2.422z" })
  );
});
var Mono_default = Icon;
