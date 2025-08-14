"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/ProviderCombine/index.tsx
var ProviderCombine_exports = {};
__export(ProviderCombine_exports, {
  default: () => ProviderCombine_default
});
module.exports = __toCommonJS(ProviderCombine_exports);
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_DefaultIcon = __toESM(require("../ProviderIcon/DefaultIcon"));
var import_providerConfig = require("../providerConfig");
var ProviderCombine = (0, import_react.memo)(
  ({ provider: originProvider, size = 12, type = "color", ...rest }) => {
    var _a, _b;
    const Render = (0, import_react.useMemo)(() => {
      if (!originProvider)
        return;
      const provider = originProvider.toLowerCase();
      for (const item of import_providerConfig.providerMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
    }, [originProvider]);
    const iconProps = {
      size: size * ((Render == null ? void 0 : Render.combineMultiple) || 1),
      type,
      ...Render == null ? void 0 : Render.props
    };
    let icon = (Render == null ? void 0 : Render.Combine) ? /* @__PURE__ */ React.createElement(Render.Combine, { ...iconProps }) : ((_a = Render == null ? void 0 : Render.Icon) == null ? void 0 : _a.Combine) ? /* @__PURE__ */ React.createElement(Render.Icon.Combine, { ...iconProps }) : ((_b = Render == null ? void 0 : Render.Icon) == null ? void 0 : _b.Text) ? /* @__PURE__ */ React.createElement(Render.Icon.Text, { ...iconProps }) : /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { size });
    return /* @__PURE__ */ React.createElement(
      import_react_layout_kit.Flexbox,
      {
        align: "center",
        flex: "none",
        height: size * 1.5,
        horizontal: true,
        width: "fit-content",
        ...rest
      },
      icon
    );
  }
);
ProviderCombine.displayName = "ProviderCombine";
var ProviderCombine_default = ProviderCombine;
