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

// src/features/ProviderCombine/Combine.tsx
var Combine_exports = {};
__export(Combine_exports, {
  default: () => Combine_default
});
module.exports = __toCommonJS(Combine_exports);
var import_antd = require("antd");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var Combine = (0, import_react.memo)(
  ({ left, right, size = 24, ...rest }) => {
    return /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", flex: "none", gap: size / 3, horizontal: true, ...rest }, left, /* @__PURE__ */ React.createElement(import_antd.Divider, { style: { marginBlock: 0, marginInline: size / 6 }, type: "vertical" }), right);
  }
);
var Combine_default = Combine;
