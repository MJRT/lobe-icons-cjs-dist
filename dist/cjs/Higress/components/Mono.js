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

// src/Higress/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M11.853 15.257c-.318.069-.648.101-.99.101H7.933a7.89 7.89 0 01-4.072-1.132 8.15 8.15 0 01-.616-.406 8.033 8.033 0 01-2.541-3.154c-.1-.23-.19-.46-.274-.7a8.007 8.007 0 01-.407-2.522V1H3.27v6.444c0 .153.004.298.025.443.016.214.048.415.1.616a4.681 4.681 0 002.223 2.985 4.667 4.667 0 002.296.616h.024a4.043 4.043 0 013.919 3.153h-.004z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M3.246 14.557v8.039H0v-12.24c.105.39.274.834.362 1.007a8.474 8.474 0 002.884 3.198v-.004z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M15.824 16.151v6.445h-3.246V16.15a3.26 3.26 0 00-.024-.447 4.683 4.683 0 00-2.32-3.6 4.706 4.706 0 00-2.3-.616H7.91a4.047 4.047 0 01-3.919-3.146c.318-.068.649-.1.991-.1H7.91a7.89 7.89 0 014.072 1.131c.213.125.419.262.616.407a7.959 7.959 0 012.537 3.154 7.849 7.849 0 01.689 3.218z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M19.904 3.868c0-.552.201-1.027.6-1.426.399-.403.882-.6 1.442-.6.56 0 1.055.201 1.454.6.403.39.6.874.6 1.442s-.201 1.055-.6 1.454c-.39.402-.87.6-1.442.6a1.979 1.979 0 01-1.454-.6c-.403-.403-.6-.89-.6-1.47zm3.73 5.107v13.62h-3.36V8.972h3.36v.004z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M12.578 9.039V1h3.246v12.24a6.393 6.393 0 00-.362-1.007 8.474 8.474 0 00-2.884-3.198v.004z" })
  );
});
var Mono_default = Icon;
