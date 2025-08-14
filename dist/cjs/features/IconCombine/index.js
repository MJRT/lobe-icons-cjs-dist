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

// src/features/IconCombine/index.tsx
var IconCombine_exports = {};
__export(IconCombine_exports, {
  default: () => IconCombine_default
});
module.exports = __toCommonJS(IconCombine_exports);
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var IconCombine = (0, import_react.memo)(
  ({
    Icon,
    style,
    Text,
    color,
    size = 24,
    spaceMultiple = 1,
    textMultiple = 1,
    extra,
    extraStyle,
    showText = true,
    showLogo = true,
    extraClassName,
    iconProps,
    inverse,
    ...rest
  }) => {
    const logo = Icon && showLogo && /* @__PURE__ */ React.createElement(
      Icon,
      {
        size,
        ...iconProps,
        style: inverse ? { marginLeft: size * spaceMultiple, ...iconProps == null ? void 0 : iconProps.style } : { marginRight: size * spaceMultiple, ...iconProps == null ? void 0 : iconProps.style }
      }
    );
    const text = showText && Text && /* @__PURE__ */ React.createElement(Text, { size: size * textMultiple });
    return /* @__PURE__ */ React.createElement(
      import_react_layout_kit.Flexbox,
      {
        align: "center",
        flex: "none",
        horizontal: true,
        justify: "flex-start",
        style: { color, ...style },
        ...rest
      },
      inverse ? /* @__PURE__ */ React.createElement(React.Fragment, null, text, logo) : /* @__PURE__ */ React.createElement(React.Fragment, null, logo, text),
      extra && /* @__PURE__ */ React.createElement(
        "span",
        {
          className: extraClassName,
          style: { fontSize: size * textMultiple * 0.95, lineHeight: 1, ...extraStyle }
        },
        extra
      )
    );
  }
);
var IconCombine_default = IconCombine;
