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

// src/features/ModelTag/Tag/Tag.tsx
var Tag_exports = {};
__export(Tag_exports, {
  default: () => Tag_default
});
module.exports = __toCommonJS(Tag_exports);
var import_antd = require("antd");
var import_class_variance_authority = require("class-variance-authority");
var import_react = require("react");
var import_styles = require("./styles");
var import_utils = require("./utils");
var Tag = (0, import_react.memo)(
  ({
    className,
    ref,
    size = "middle",
    color,
    variant = "filled",
    children,
    onClick,
    style,
    ...rest
  }) => {
    const { styles, cx, theme } = (0, import_styles.useStyles)();
    const variants = (0, import_react.useMemo)(
      () => (0, import_class_variance_authority.cva)(styles.root, {
        defaultVariants: {
          size: "middle",
          variant: "filled"
        },
        /* eslint-disable sort-keys-fix/sort-keys-fix */
        variants: {
          variant: {
            filled: styles.filled,
            outlined: styles.outlined,
            borderless: styles.borderless
          },
          size: {
            small: styles.small,
            middle: null,
            large: styles.large
          }
        }
        /* eslint-enable sort-keys-fix/sort-keys-fix */
      }),
      [styles]
    );
    const colors = (0, import_react.useMemo)(() => {
      let textColor = theme.colorTextSecondary;
      let backgroundColor;
      let borderColor;
      const isFilled = variant === "filled";
      const isPresetColor = color && import_utils.presetColors.includes(color);
      const isPresetSystemColors = color && import_utils.presetSystemColors.has(color);
      const isHexColor = color && color.startsWith("#");
      if (isPresetColor) {
        textColor = (0, import_utils.colorsPreset)(theme, color);
        backgroundColor = (0, import_utils.colorsPreset)(theme, color, "fillTertiary");
        borderColor = (0, import_utils.colorsPreset)(theme, color, isFilled ? "fillQuaternary" : "fillTertiary");
      }
      if (isPresetSystemColors) {
        textColor = (0, import_utils.colorsPresetSystem)(theme, color);
        backgroundColor = (0, import_utils.colorsPresetSystem)(theme, color, "fillTertiary");
        borderColor = (0, import_utils.colorsPresetSystem)(
          theme,
          color,
          isFilled ? "fillQuaternary" : "fillTertiary"
        );
      }
      if (isHexColor) {
        textColor = theme.colorBgLayout;
        backgroundColor = color;
      }
      return {
        backgroundColor,
        borderColor,
        textColor
      };
    }, [color, theme, variant]);
    return /* @__PURE__ */ React.createElement(
      import_antd.Tag,
      {
        bordered: false,
        className: cx(variants({ size, variant }), className),
        color,
        onClick,
        ref,
        style: {
          background: colors == null ? void 0 : colors.backgroundColor,
          borderColor: colors == null ? void 0 : colors.borderColor,
          color: colors == null ? void 0 : colors.textColor,
          cursor: onClick ? "pointer" : void 0,
          ...style
        },
        ...rest
      },
      children
    );
  }
);
Tag.displayName = "Tag";
var Tag_default = Tag;
