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

// src/Figma/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M6.082 8.241C4.83 7.441 4 6.057 4 4.483 4 2.007 6.05 0 8.578 0h7.844C18.95 0 21 2.007 21 4.483c0 1.574-.829 2.959-2.082 3.758C20.17 9.041 21 10.426 21 12c0 2.476-2.05 4.483-4.578 4.483h-.084A4.615 4.615 0 0113.24 15.3v4.176C13.24 21.98 11.145 24 8.599 24 6.076 24 4 21.998 4 19.517c0-1.574.829-2.959 2.082-3.758C4.829 14.959 4 13.574 4 12c0-1.574.829-2.959 2.082-3.759zM13.24 12c0 1.676 1.387 3.034 3.098 3.034h.084c1.711 0 3.099-1.358 3.099-3.034 0-1.676-1.388-3.034-3.1-3.034h-.083c-1.71 0-3.098 1.358-3.098 3.034zm-1.48-3.034H8.578C6.867 8.966 5.48 10.324 5.48 12c0 1.672 1.382 3.029 3.089 3.034H11.76V8.966zm-3.182 7.517h-.01c-1.707.005-3.089 1.362-3.089 3.034 0 1.67 1.403 3.034 3.12 3.034 1.74 0 3.161-1.381 3.161-3.075v-2.993H8.578zm3.182-8.966H8.578c-1.711 0-3.099-1.358-3.099-3.034 0-1.676 1.388-3.034 3.1-3.034h3.181v6.068zm4.662 0H13.24V1.45h3.182c1.711 0 3.099 1.358 3.099 3.034 0 1.676-1.388 3.034-3.1 3.034z"
      }
    )
  );
});
var Mono_default = Icon;
