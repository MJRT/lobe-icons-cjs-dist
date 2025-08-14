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

// src/Yuanbao/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b, c, d] = (0, import_useFillId.useFillIds)(import_style.TITLE, 4);
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
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
        fill: a.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M12 0c.518 0 1.028.033 1.528.096A6.188 6.188 0 0112.12 12.28l-.12.001c-2.99 0-5.242 2.179-5.554 5.11-.223 2.086.353 4.412 2.242 6.146C3.672 22.1 0 17.479 0 12 0 5.373 5.373 0 12 0z",
        fill: b.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.286 5a2.438 2.438 0 01.682 3.38c-3.962 5.966-3.215 10.743 2.648 15.136C3.636 22.056 0 17.452 0 12c0-1.787.39-3.482 1.09-5.006.253-.435.525-.872.817-1.311A2.438 2.438 0 015.286 5z",
        fill: c.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M12.98.04c.272.021.543.053.81.093.583.106 1.117.254 1.538.44 6.638 2.927 8.07 10.052 1.748 15.642a4.126 4.126 0 01-5.822-.358c-1.51-1.706-1.3-4.184.357-5.822.858-.848 3.108-1.223 4.045-2.44 1.257-1.635 2.122-6.01-2.523-7.507L12.98.04z",
        fill: d.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M13.528.096A6.187 6.187 0 0112 12.281a5.752 5.752 0 00-1.71.255c.147-.905.595-1.784 1.321-2.501.858-.848 3.108-1.223 4.045-2.441 1.27-1.651 2.14-6.104-2.676-7.554.184.014.367.033.548.056z",
        fill: "#ECECEE",
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: a.id, x1: "12", x2: "12", y1: "0", y2: "24" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#02B2FC" }), /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#20CBB6" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#13D363" })), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "9.095",
        x2: "9.095",
        y1: "0",
        y2: "23.537"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#C3EBEF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#D3F4DD" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: c.id,
        x1: "4.308",
        x2: "4.308",
        y1: "4.593",
        y2: "23.516"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#14D368" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#24CEAD" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#03B4F8" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: d.id,
        x1: "15.685",
        x2: "15.685",
        y1: ".039",
        y2: "17.249"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#61CFFA", stopOpacity: ".996" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#79E3C0" })
    ))
  );
});
var Color_default = Icon;
