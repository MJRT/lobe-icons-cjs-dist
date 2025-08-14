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

// src/MyShell/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b] = (0, import_useFillId.useFillIds)(import_style.TITLE, 2);
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
        d: "M5.743 4C1.703 4 .306 13.31.002 15.83c-.026.216.241.328.404.182 7.957-7.15 11.644 3.594 14.802 3.594-1.768 0-3.063-4.94-4.69-9.263C9.253 6.985 7.788 4 5.743 4z",
        fill: a.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M23.58 15.76c.153.185.454.063.417-.174-.364-2.303-1.562-8.395-4.078-8.395-1.547 0-1.941 3.084-2.337 6.178l-.002.01c3.381 0 4.665.758 6 2.38z",
        fill: b.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M10.517 10.343c1.627 4.322 2.923 9.263 4.69 9.263 1.573 0 1.975-3.117 2.373-6.226l.002-.01c.396-3.095.79-6.18 2.336-6.18-3.1 0-4.71 11.248-9.4 3.153z",
        fill: "#DDB1FF"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: a.id,
        x1: "0",
        x2: "15.209",
        y1: "11.563",
        y2: "12.019"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#3239DC" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#5A38E2" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "17.58",
        x2: "24.003",
        y1: "11.387",
        y2: "11.533"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#3239DC" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#5A38E2" })
    ))
  );
});
var Color_default = Icon;
