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

// src/features/IconAvatar/index.tsx
var IconAvatar_exports = {};
__export(IconAvatar_exports, {
  default: () => IconAvatar_default
});
module.exports = __toCommonJS(IconAvatar_exports);
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_util = require("./util");
var IconAvatar = (0, import_react.memo)(
  ({
    shape = "circle",
    color = "#fff",
    background,
    size,
    style,
    iconMultiple = 0.75,
    Icon,
    iconStyle,
    iconClassName,
    ...rest
  }) => {
    const { isDarkMode } = (0, import_antd_style.useThemeMode)();
    return /* @__PURE__ */ React.createElement(
      import_react_layout_kit.Center,
      {
        flex: "none",
        style: {
          background,
          borderRadius: shape === "circle" ? "50%" : Math.floor(size * 0.1),
          boxShadow: (0, import_util.getAvatarShadow)(isDarkMode, background),
          color,
          height: size,
          width: size,
          ...style
        },
        ...rest
      },
      Icon && /* @__PURE__ */ React.createElement(
        Icon,
        {
          className: iconClassName,
          color,
          size: (0, import_util.roundToEven)(size * iconMultiple),
          style: iconStyle
        }
      )
    );
  }
);
var IconAvatar_default = IconAvatar;
