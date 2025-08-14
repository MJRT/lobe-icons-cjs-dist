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

// src/Recraft/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M19.667 8.275c0-4.57-4.15-8.275-9.27-8.275-1.774 0-3.213 3.705-3.213 8.275 0 1.143.09 2.233.253 3.224H4.29L1 23h9.4v-6.447c5.117 0 9.266-3.707 9.266-8.275l.001-.002zm-9.27-6.76c.93 0 1.682 3.028 1.682 6.76 0 3.733-.752 6.76-1.681 6.76-.93 0-1.681-3.027-1.681-6.76 0-3.732.752-6.76 1.68-6.76z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M19.848 16.552h-9.44L14.028 23h9.438l-3.618-6.448z" })
  );
});
var Mono_default = Icon;
