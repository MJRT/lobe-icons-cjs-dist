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

// src/Haiper/components/Mono.tsx
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
        d: "M17.693 10.613a4.307 4.307 0 110-8.613 4.307 4.307 0 010 8.613zm4.304 6.928a4.394 4.394 0 00-2.724-4.064c-.535-.222-1.104-.3-1.722-.333-.878-.047-1.865-.195-2.684-.444-.84-.254-1.557-.805-2.176-1.423-.62-.618-1.144-1.343-1.428-2.17-.285-.83-.382-1.843-.443-2.711-.06-.86-.26-1.72-.746-2.444a4.417 4.417 0 00-6.786-.66 4.394 4.394 0 00.677 6.77c.7.464 1.582.682 2.452.737.913.058 1.86.18 2.72.438.839.254 1.555.806 2.175 1.424.62.618 1.143 1.343 1.428 2.17.282.819.416 1.838.439 2.711.017.663.1 1.161.319 1.701a4.421 4.421 0 005.793 2.416 4.392 4.392 0 001.438-.969 4.383 4.383 0 001.27-3.148h-.002v-.001zM2 17.693a4.307 4.307 0 108.613 0 4.307 4.307 0 00-8.613 0z"
      }
    )
  );
});
var Mono_default = Icon;
