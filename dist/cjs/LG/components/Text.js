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

// src/LG/components/Text.tsx
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
      fillRule: "nonzero",
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 65 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M6.422 17.93h9.17v3.783H2V2.287h4.422V17.93zm18.9-3.623h3.6v3.398c-.661.256-1.957.512-3.188.512-3.982 0-5.308-2.05-5.308-6.217 0-3.976 1.262-6.317 5.241-6.317 2.218 0 3.477.706 4.52 2.054l2.754-2.569C31.26 2.737 28.325 2 25.57 2c-6.192 0-9.444 3.427-9.444 9.966C16.125 18.473 19.06 22 25.54 22c2.972 0 5.878-.768 7.459-1.891v-9.426h-7.68l.002 3.624zM39 22l6.437-20h4.753l6.437 20H52.39l-2.852-10.418a102.698 102.698 0 01-.896-3.24 72.439 72.439 0 00-.869-3.292h-.109a88.125 88.125 0 01-.842 3.293c-.29 1.115-.58 2.195-.869 3.239L43.074 22H39zm3.993-5.128v-3.104h9.56v3.104h-9.56zM58.98 22V2H63v20h-4.02z" })
  );
});
var Text_default = Icon;
