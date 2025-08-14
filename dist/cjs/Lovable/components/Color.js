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

// src/Lovable/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const { id, fill } = (0, import_useFillId.useFillId)(import_style.TITLE);
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
        clipRule: "evenodd",
        d: "M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z",
        fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "radialGradient",
      {
        cx: "0",
        cy: "0",
        gradientTransform: "matrix(-1 22.49999 -30.45394 -1.3535 14 3)",
        gradientUnits: "userSpaceOnUse",
        id,
        r: "1"
      },
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#FE7B02" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".433", stopColor: "#FE4230" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".548", stopColor: "#FE529A" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".654", stopColor: "#DD67EE" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".95", stopColor: "#4B73FF" })
    ))
  );
});
var Color_default = Icon;
