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

// src/Luma/components/Text.tsx
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
      viewBox: "0 0 111 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M2 2h2.314v17.355h8.926v2.15H2V2zm28.402 12.066c0 1.065-.137 2.075-.413 3.03-.257.956-.68 1.8-1.267 2.535-.57.716-1.323 1.295-2.26 1.735-.936.423-2.074.634-3.415.634-1.34 0-2.48-.211-3.416-.634-.937-.44-1.699-1.019-2.287-1.735a7.47 7.47 0 01-1.267-2.535 11.616 11.616 0 01-.386-3.03V2h2.315v11.736c0 .79.082 1.551.247 2.286.166.735.441 1.387.827 1.956.386.57.9 1.028 1.543 1.377.642.331 1.45.496 2.424.496.973 0 1.781-.165 2.424-.496a4.311 4.311 0 001.543-1.377 5.67 5.67 0 00.826-1.956c.166-.735.248-1.497.248-2.286V2h2.314v12.066zM35.171 2h3.443l6.612 15.29h.055L51.948 2h3.36v19.504h-2.313V5.14h-.056l-6.997 16.364h-1.405L37.54 5.14h-.055v16.364H35.17V2zm31.328 0h2.177l8.292 19.504h-2.7l-1.983-4.793h-9.752l-2.011 4.793h-2.618L66.5 2zm1.047 2.975h-.055l-4.05 9.587h7.962l-3.857-9.587zM93.563 2h2.177l8.292 19.504h-2.7l-1.983-4.793h-9.753l-2.01 4.793h-2.618L93.563 2zm1.047 2.975h-.055l-4.05 9.587h7.962L94.61 4.975zM106.624 2h2.314v19.504h-2.314V2z" })
  );
});
var Text_default = Icon;
