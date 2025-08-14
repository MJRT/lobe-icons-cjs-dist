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

// src/features/ProviderIcon/DefaultIcon.tsx
var DefaultIcon_exports = {};
__export(DefaultIcon_exports, {
  default: () => DefaultIcon_default
});
module.exports = __toCommonJS(DefaultIcon_exports);
var import_antd_style = require("antd-style");
var import_lucide_react = require("lucide-react");
var import_react = require("react");
var DefaultIcon = (0, import_react.memo)(({ color, size = 12, ...rest }) => {
  const theme = (0, import_antd_style.useTheme)();
  return /* @__PURE__ */ React.createElement(import_lucide_react.Radar, { color: color || theme.colorTextDescription, size, ...rest });
});
var DefaultIcon_default = DefaultIcon;
