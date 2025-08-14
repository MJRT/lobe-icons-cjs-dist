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

// src/Luma/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b, c, d, e] = (0, import_useFillId.useFillIds)(import_style.TITLE, 5);
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
    /* @__PURE__ */ React.createElement("path", { d: "M2 5.999L12.392 0v24L2 18V5.999z", fill: "#000" }),
    /* @__PURE__ */ React.createElement("path", { d: "M12.392 24L2 18l10.392-6 10.393 6-10.393 6z", fill: a.fill }),
    /* @__PURE__ */ React.createElement("path", { d: "M12.392 24L2 18l10.392-6 10.393 6-10.393 6z", fill: b.fill }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M2 5.999L12.392 0v24L2 18V5.999z",
        fill: c.fill,
        style: {
          mixBlendMode: "screen"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.392 24L2 18l10.392-6 10.393 6-10.393 6z",
        fill: d.fill,
        style: {
          mixBlendMode: "overlay"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M2 5.999L12.392 0v24L2 18V5.999z",
        fill: e.fill,
        style: {
          mixBlendMode: "overlay"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: a.id, x1: "2", x2: "22.785", y1: "18", y2: "18" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#00A" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#A78DFF" })), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: b.id, x1: "2", x2: "22.785", y1: "18", y2: "18" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#00A" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#A78DFF" })), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: c.id,
        x1: "13.748",
        x2: "4.672",
        y1: "22.642",
        y2: "3.745"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#004EFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0FF" })
    ), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: d.id, x1: "2", x2: "22.785", y1: "18", y2: "18" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#00A" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#A78DFF" })), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: e.id,
        x1: "13.748",
        x2: "4.672",
        y1: "22.642",
        y2: "3.745"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#004EFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#0FF" })
    ))
  );
});
var Color_default = Icon;
