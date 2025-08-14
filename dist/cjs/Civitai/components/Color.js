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

// src/Civitai/components/Color.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M12 0l10.392 6v12L12 24 1.608 18V6L12 0z", fill: a.fill }),
    /* @__PURE__ */ React.createElement("path", { d: "M12 3.934l6.985 4.033v8.066L12 20.065l-6.985-4.032V7.967L12 3.934z", fill: b.fill }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12 6.885l4.43 2.558v1.377h-2.386L12 9.64l-2.044 1.18v2.36L12 14.36l2.044-1.18h2.386v1.377L12 17.115l-4.43-2.558V9.443L12 6.885z",
        fill: "#fff",
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: a.id, x1: "12", x2: "12", y1: "0", y2: "24" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#1281F4" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0821C6" })), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "12",
        x2: "12",
        y1: "3.934",
        y2: "20.066"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#09138A" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#150740" })
    ))
  );
});
var Color_default = Icon;
