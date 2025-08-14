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

// src/AlibabaCloud/components/TextCn.tsx
var TextCn_exports = {};
__export(TextCn_exports, {
  default: () => TextCn_default
});
module.exports = __toCommonJS(TextCn_exports);
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
      viewBox: "0 0 60 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M15.476 6.599H10.02v11.23h5.455V6.599zm-2.246 8.984h-1.177V8.738h1.177v6.845z"
      }
    ),
    /* @__PURE__ */ React.createElement("path", { d: "M2 22h2.139V4.246h2.246l-1.283 5.882v2.14h1.283v4.705c0 .321-.214.535-.535.535h-.534v2.14h1.069a2.145 2.145 0 002.14-2.14v-7.487H7.24L8.524 4.14V2H2v20z" }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M31.733 17.508h6.738v-2.139h-6.845v-2.14h6.63V2.108h-15.4V13.23h6.63v2.139h-6.844v2.139h6.845v2.353h-7.38V22h17.005v-2.139h-7.38v-2.353zm.107-13.262h4.492v2.353H31.84V4.246zm0 4.492h4.492v2.246H31.84V8.738zm-2.14 2.246H25.21V8.738H29.7v2.246zm0-4.385H25.21V4.246H29.7v2.353z"
      }
    ),
    /* @__PURE__ */ React.createElement("path", { d: "M16.866 4.246h-7.38v-2.14h10.375v2.14h-.749v14.332c0 1.925-1.604 3.422-3.422 3.422h-2.246v-2.139h1.604c1.07 0 1.818-.856 1.818-1.818V4.246zM57.401 2.214H42v2.139h15.401v-2.14zM58.257 10.235v2.14H47.989l-3.422 7.486H54.94l-1.604-3.422h2.353l1.818 4.064c.107.107.107.214.107.427 0 .535-.428 1.07-1.07 1.07H42.107v-2.139l3.422-7.487h-4.278v-2.139h17.006z" })
  );
});
var TextCn_default = Icon;
