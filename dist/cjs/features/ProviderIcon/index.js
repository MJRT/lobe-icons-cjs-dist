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

// src/features/ProviderIcon/index.tsx
var ProviderIcon_exports = {};
__export(ProviderIcon_exports, {
  default: () => ProviderIcon_default
});
module.exports = __toCommonJS(ProviderIcon_exports);
var import_react = require("react");
var import_providerConfig = require("../providerConfig");
var import_providerEnum = require("../providerEnum");
var import_DefaultAvatar = __toESM(require("./DefaultAvatar"));
var import_DefaultIcon = __toESM(require("./DefaultIcon"));
var ProviderIcon = (0, import_react.memo)(
  ({ provider: originProvider, size = 12, type = "avatar", forceMono, shape, ...rest }) => {
    var _a, _b, _c, _d, _e, _f, _g;
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
    const props = {
      size,
      ...Render == null ? void 0 : Render.props,
      ...rest
    };
    switch (type) {
      case "avatar": {
        if (!(Render == null ? void 0 : Render.Icon))
          return /* @__PURE__ */ React.createElement(import_DefaultAvatar.default, { shape, ...props });
        return /* @__PURE__ */ React.createElement(Render.Icon.Avatar, { shape, ...props });
      }
      case "mono": {
        if (!(Render == null ? void 0 : Render.Icon))
          return /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { ...props });
        if (!forceMono && originProvider === import_providerEnum.ModelProvider.LobeHub) {
          return /* @__PURE__ */ React.createElement(Render.Icon.Color, { ...props });
        }
        return /* @__PURE__ */ React.createElement(Render.Icon, { ...props });
      }
      case "color": {
        if (!(Render == null ? void 0 : Render.Icon))
          return /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { ...props });
        return ((_a = Render.Icon) == null ? void 0 : _a.Color) ? /* @__PURE__ */ React.createElement(Render.Icon.Color, { ...props }) : /* @__PURE__ */ React.createElement(Render.Icon, { ...props });
      }
      case "combine": {
        if (!(Render == null ? void 0 : Render.Icon))
          return /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { ...props });
        return ((_b = Render.Icon) == null ? void 0 : _b.Combine) ? /* @__PURE__ */ React.createElement(Render.Icon.Combine, { type: "mono", ...props }) : ((_c = Render.Icon) == null ? void 0 : _c.Brand) ? /* @__PURE__ */ React.createElement(Render.Icon.Brand, { ...props }) : ((_d = Render.Icon) == null ? void 0 : _d.Text) ? /* @__PURE__ */ React.createElement(Render.Icon.Text, { ...props }) : /* @__PURE__ */ React.createElement(Render.Icon, { ...props });
      }
      case "combine-color": {
        if (!(Render == null ? void 0 : Render.Icon))
          return /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { ...props });
        return ((_e = Render.Icon) == null ? void 0 : _e.Combine) ? /* @__PURE__ */ React.createElement(Render.Icon.Combine, { type: "color", ...props }) : ((_f = Render.Icon) == null ? void 0 : _f.BrandColor) ? /* @__PURE__ */ React.createElement(Render.Icon.BrandColor, { ...props }) : ((_g = Render.Icon) == null ? void 0 : _g.Text) ? /* @__PURE__ */ React.createElement(Render.Icon.Text, { ...props }) : /* @__PURE__ */ React.createElement(Render.Icon, { ...props });
      }
      default: {
        return /* @__PURE__ */ React.createElement(import_DefaultIcon.default, { ...props });
      }
    }
  }
);
ProviderIcon.displayName = "ProviderIcon";
var ProviderIcon_default = ProviderIcon;
