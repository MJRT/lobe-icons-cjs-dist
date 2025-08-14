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

// src/StateCloud/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
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
        d: "M15.509 6.023a3.975 3.975 0 014.49 2.442A5.343 5.343 0 0124 13.653C23.999 16.605 21.623 19 18.689 19a5.307 5.307 0 01-4.903-3.303 5.228 5.228 0 01-.399-1.907h-1.343a.105.105 0 01-.074-.18l2.733-2.752a.13.13 0 01.185 0l2.734 2.754c.065.066.019.18-.074.18l-1.42-.001c.047.338.152.673.325.99a2.844 2.844 0 003.954 1.09c1.218-.723 1.732-2.29 1.177-3.6a2.855 2.855 0 00-3.386-1.65 2.03 2.03 0 00-.935-2.366 1.998 1.998 0 00-2.492.431c-.68-1.629-2.363-2.68-4.19-2.463-1.974.234-3.442 1.87-3.553 3.802a3.184 3.184 0 00-3.279.135 3.25 3.25 0 00-1.336 3.588 3.214 3.214 0 003.093 2.356l7.153.003c.055 0 .104.033.125.083a6.495 6.495 0 001.418 2.088c.053.053.018.142-.056.142l-8.637-.003h-.006C2.463 18.416-.001 15.93 0 12.868c.001-3.065 2.468-5.546 5.507-5.544h.008A6.136 6.136 0 0110.964 4c1.801 0 3.421.781 4.545 2.023z",
        fill: "#DF0428",
        fillRule: "evenodd"
      }
    )
  );
});
var Color_default = Icon;
