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

// src/Hedra/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M9.964 22.717l1.67-2.89L14.043 24l3.04-1.754-2.742-4.746-.682-1.18-.8-1.385h-2.453l-.8 1.385-.682 1.18-2.001 3.463 3.04 1.754zm-8.268-7.124h3.338l-2.41 4.172 3.04 1.755 2.742-4.747.682-1.18.8-1.384-1.227-2.123H1.696v3.507zm2.04-10.717l1.67 2.89H.583v3.507h8.448L10.26 9.15l-.8-1.385-.682-1.18-2.001-3.462-3.04 1.753zm10.308-3.593l-1.67 2.89L9.965 0l-3.04 1.754L9.666 6.5l.683 1.18.8 1.385h2.453l.8-1.385.681-1.18 2.001-3.463-3.04-1.754zm8.268 7.124h-3.338l2.41-4.172-3.04-1.754-2.742 4.746-.682 1.18-.8 1.385 1.227 2.122H22.312V8.407zm-2.04 10.716l-1.67-2.889h4.822v-3.507h-8.448L13.75 14.85l.8 1.385.682 1.18 2 3.463 3.041-1.755z" })
  );
});
var Mono_default = Icon;
