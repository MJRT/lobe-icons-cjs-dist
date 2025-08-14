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

// src/Make/components/Color.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M6.989 4.036L.062 17.818a.577.577 0 00.257.774l3.733 1.876a.577.577 0 00.775-.256L11.753 6.43a.577.577 0 00-.257-.775L7.763 3.78a.575.575 0 00-.774.257z",
        fill: a.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M19.245 3.832h4.179c.318 0 .577.26.577.577v15.425a.578.578 0 01-.577.578h-4.179a.578.578 0 01-.577-.578V4.41c0-.318.259-.577.577-.577z",
        fill: b.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.815 4.085L9.85 19.108a.576.576 0 00.453.677l4.095.826c.314.063.62-.14.681-.454l2.964-15.022a.577.577 0 00-.453-.677l-4.096-.827a.577.577 0 00-.68.454z",
        fill: c.fill
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: a.id, x1: "1.5", x2: "12", y1: "19.5", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#F0F" }), /* @__PURE__ */ React.createElement("stop", { offset: ".17", stopColor: "#E90CF9" }), /* @__PURE__ */ React.createElement("stop", { offset: ".54", stopColor: "#C023ED" }), /* @__PURE__ */ React.createElement("stop", { offset: ".73", stopColor: "#B02DE9" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#B02DE9" })), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: b.id, x1: "0", x2: "24", y1: "24", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#B02DE9" }), /* @__PURE__ */ React.createElement("stop", { offset: ".02", stopColor: "#B02DE9" }), /* @__PURE__ */ React.createElement("stop", { offset: ".8", stopColor: "#6D00CC" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#6D00CC" })), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: c.id, x1: "0", x2: "24", y1: "24", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#F0F" }), /* @__PURE__ */ React.createElement("stop", { offset: ".02", stopColor: "#F0F" }), /* @__PURE__ */ React.createElement("stop", { offset: ".09", stopColor: "#E90CF9" }), /* @__PURE__ */ React.createElement("stop", { offset: ".23", stopColor: "#C023ED" }), /* @__PURE__ */ React.createElement("stop", { offset: ".3", stopColor: "#B02DE9" }), /* @__PURE__ */ React.createElement("stop", { offset: ".42", stopColor: "#A42BE3" }), /* @__PURE__ */ React.createElement("stop", { offset: ".63", stopColor: "#8626D5" }), /* @__PURE__ */ React.createElement("stop", { offset: ".85", stopColor: "#6021C3" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#6021C3" })))
  );
});
var Color_default = Icon;
