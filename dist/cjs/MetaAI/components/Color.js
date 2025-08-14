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

// src/MetaAI/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b, c] = (0, import_useFillId.useFillIds)(import_style.TITLE, 3);
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
    /* @__PURE__ */ React.createElement("g", { clipPath: a.fill, filter: b.fill }, /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3.627a8.373 8.373 0 100 16.746 8.373 8.373 0 000-16.746z",
        fill: c.fill,
        fillRule: "evenodd"
      }
    )),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: c.id, x1: "24", x2: "0", y1: "0", y2: "24" }, /* @__PURE__ */ React.createElement("stop", { offset: ".13", stopColor: "#FF97E3" }), /* @__PURE__ */ React.createElement("stop", { offset: ".18", stopColor: "#D14FE1" }), /* @__PURE__ */ React.createElement("stop", { offset: ".338", stopColor: "#0050E2" }), /* @__PURE__ */ React.createElement("stop", { offset: ".666", stopColor: "#0050E2" }), /* @__PURE__ */ React.createElement("stop", { offset: ".809", stopColor: "#00DDF4" }), /* @__PURE__ */ React.createElement("stop", { offset: ".858", stopColor: "#23F8CC" })), /* @__PURE__ */ React.createElement("clipPath", { id: a.id }, /* @__PURE__ */ React.createElement("path", { d: "M0 0h24v24H0z", fill: "#fff" })), /* @__PURE__ */ React.createElement(
      "filter",
      {
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        height: "24",
        id: b.id,
        width: "24",
        x: "0",
        y: "0"
      },
      /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
      /* @__PURE__ */ React.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
      /* @__PURE__ */ React.createElement(
        "feColorMatrix",
        {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }
      ),
      /* @__PURE__ */ React.createElement("feOffset", null),
      /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: ".75" }),
      /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }),
      /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" }),
      /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_674_237" })
    ))
  );
});
var Color_default = Icon;
