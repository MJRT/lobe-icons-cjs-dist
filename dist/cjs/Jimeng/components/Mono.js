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

// src/Jimeng/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M5.257 1.808C8.768 6.74 14.431 9.45 20.064 8.403a7.398 7.398 0 001.281-.38c.855-.33 1.975 1.01 1.326 1.658-.43.428-.84.82-1.208 1.147a51.149 51.149 0 01-8.389 6.044 51.146 51.146 0 01-9.49 4.263c-.453.15-.98.304-1.546.457-.885.238-1.484-1.4-.77-1.975.378-.306.713-.617.978-.927C5.969 14.336 6.299 8.174 3.717 2.697a18.2 18.2 0 01-.364-.84C2.995.98 4.042.335 4.656 1.055c.243.284.453.545.601.753zM19.53 13.695c-2.324 2.863-2.816 5.944-2.378 8.583l.024.16c.117.79-.816 1.277-1.448.788a12.813 12.813 0 00-.093-.072c-2.12-1.614-4.62-2.828-7.948-2.446a27.95 27.95 0 006.086-2.627c2.21-1.275 4.147-2.774 5.756-4.386z" })
  );
});
var Mono_default = Icon;
