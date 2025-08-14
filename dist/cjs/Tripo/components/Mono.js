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

// src/Tripo/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M12.661 4.752a.04.04 0 00-.013-.055.038.038 0 00-.02-.005H6.496a.19.19 0 01-.165-.092L4.245 1.052a.034.034 0 01.014-.047A.038.038 0 014.275 1c5.492 0 10.733 0 15.721.002 2.089 0 3.699 1.54 4.003 3.598.008.062-.019.092-.08.092h-6.67a.204.204 0 00-.174.1c-1.414 2.41-2.82 4.803-4.218 7.178-.28.472-.92.62-1.373.342-.19-.116-.357-.304-.502-.561a37.917 37.917 0 00-.882-1.489c-.222-.356-.234-.707-.035-1.052a661.77 661.77 0 012.597-4.46v.002z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M10.772 16.986c.57.972 1.935.916 2.489-.028L19 7.164a.127.127 0 01.116-.067h4.23c.017 0 .03.014.028.03 0 .005-.001.01-.003.013-2.605 4.432-5.232 8.906-7.88 13.42-1.283 2.191-4.278 2.517-6.179.947-.308-.254-.665-.727-1.069-1.417-2.525-4.324-5.098-8.71-7.72-13.162-1.063-1.803-.424-3.947 1.19-5.2.053-.041.095-.033.129.023 2.905 4.95 5.882 10.029 8.93 15.236z" })
  );
});
var Mono_default = Icon;
