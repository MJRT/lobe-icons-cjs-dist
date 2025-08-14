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

// src/features/ProviderIcon/DefaultAvatar.tsx
var DefaultAvatar_exports = {};
__export(DefaultAvatar_exports, {
  default: () => DefaultAvatar_default
});
module.exports = __toCommonJS(DefaultAvatar_exports);
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_DefaultIcon = __toESM(require("./DefaultIcon"));
var DefaultAvatar = (0, import_react.memo)(
  ({
    shape = "circle",
    color,
    background,
    size,
    style,
    iconMultiple = 0.6,
    iconStyle,
    iconClassName
  }) => {
    const theme = (0, import_antd_style.useTheme)();
    return /* @__PURE__ */ React.createElement(
      import_react_layout_kit.Center,
      {
        flex: "none",
        style: {
          background: background || theme.colorFillSecondary,
          borderRadius: shape === "circle" ? "50%" : Math.floor(size * 0.1),
          color,
          height: size,
          width: size,
          ...style
        }
      },
      /* @__PURE__ */ React.createElement(
        import_DefaultIcon.default,
        {
          className: iconClassName,
          color,
          size: size * iconMultiple,
          style: iconStyle
        }
      )
    );
  }
);
var DefaultAvatar_default = DefaultAvatar;
