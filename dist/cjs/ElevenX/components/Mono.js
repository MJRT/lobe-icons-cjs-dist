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

// src/ElevenX/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M15.308 8.491c1.84-1.8 3.664-3.58 5.482-5.365.166-.163.276-.244.493-.043 1.114 1.036 1.925 2.244 2.2 3.741.376 2.043-.1 3.878-1.493 5.463-.884 1.007-1.988 1.672-3.295 2.02-.044.011-.084.04-.13.063.028.153.164.169.265.21 1.633.67 3.267 1.336 4.903 1.998.218.088.335.177.225.441-.468 1.12-1.075 2.143-2.036 2.933-1.055.868-2.26 1.388-3.638 1.516-1.942.18-3.64-.39-5.084-1.652-1.165-1.02-1.852-2.31-2.084-3.828a6.02 6.02 0 01.129-2.54c.023-.086.05-.185-.105-.311l-8.145 7.967c-1.988-1.543-3.01-3.99-2.454-6.469.578-2.585 2.274-4.17 4.807-4.966-.041-.224-.22-.252-.367-.312-1.587-.654-3.173-1.31-4.764-1.955-.19-.078-.267-.149-.183-.361.626-1.592 1.594-2.906 3.163-3.724 1.864-.972 3.786-1.09 5.739-.282 2.104.87 3.373 2.44 3.89 4.598.224.935.192 1.881-.031 2.818-.033.136-.094.266-.003.494l2.516-2.454z" })
  );
});
var Mono_default = Icon;
