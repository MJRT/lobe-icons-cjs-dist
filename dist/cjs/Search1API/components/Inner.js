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

// src/Search1API/components/Inner.tsx
var Inner_exports = {};
__export(Inner_exports, {
  default: () => Inner_default
});
module.exports = __toCommonJS(Inner_exports);
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
    /* @__PURE__ */ React.createElement("path", { d: "M12.142 24c2.933 0 5.202-.686 6.809-2.06 1.608-1.373 2.41-3.1 2.41-5.18 0-2.026-.678-3.575-2.034-4.645-.873-.689-2.186-1.24-3.934-1.65L11.4 9.522c-1.541-.36-2.549-.674-3.023-.942-.739-.4-1.108-1.008-1.108-1.82 0-.886.375-1.575 1.124-2.069.749-.494 1.75-.741 3.006-.741 1.129 0 2.074.191 2.833.572 1.14.577 1.751 1.549 1.835 2.917h4.57c-.085-2.418-.984-4.263-2.696-5.534C16.225.636 14.157 0 11.729 0 8.823 0 6.62.674 5.12 2.022 3.62 3.37 2.87 5.062 2.87 7.1c0 2.233.766 3.874 2.3 4.924.905.627 2.568 1.207 4.99 1.744l2.463.54c1.44.307 2.494.662 3.159 1.064.663.412.995.994.995 1.744 0 1.286-.677 2.165-2.034 2.639-.714.248-1.643.37-2.789.37-1.912 0-3.261-.466-4.05-1.403-.43-.516-.72-1.292-.867-2.332H2.5c0 2.368.858 4.227 2.574 5.58C6.79 23.324 9.147 24 12.142 24z" })
  );
});
var Inner_default = Icon;
