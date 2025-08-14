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

// src/Anyscale/components/Color.tsx
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
        d: "M17.583 12.344L14.606 17.5H20.6c.22 0 .424-.117.535-.308l2.799-4.848h-6.351zM23.934 11.656l-2.799-4.848A.616.616 0 0020.6 6.5h-5.994l2.977 5.156h6.35zM8.653 6.5h5.953l-2.997-5.191A.616.616 0 0011.074 1H5.476l3.176 5.5zM4.881 1.343L2.083 6.191a.618.618 0 000 .617l2.997 5.191 2.976-5.156-3.175-5.5zM8.057 17.155L5.081 12l-2.998 5.192a.618.618 0 000 .617l2.798 4.848 3.175-5.5h.001zM5.476 23h5.598c.22 0 .424-.117.535-.308l2.997-5.192H8.653L5.477 23z",
        fill: "#0163FB"
      }
    )
  );
});
var Color_default = Icon;
