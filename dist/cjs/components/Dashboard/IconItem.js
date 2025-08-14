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

// src/components/Dashboard/IconItem.tsx
var IconItem_exports = {};
__export(IconItem_exports, {
  default: () => IconItem_default
});
module.exports = __toCommonJS(IconItem_exports);
var import_ui = require("@lobehub/ui");
var import_antd_style = require("antd-style");
var import_dumi = require("dumi");
var import_lucide_react = require("lucide-react");
var import_polished = require("polished");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_utils = require("./utils");
var useStyles = (0, import_antd_style.createStyles)(({ cx, css, token }) => {
  const colorText = cx(
    "color-text",
    css`
      display: block;
    `
  );
  const copy = cx(
    "copy",
    css`
      z-index: 1;
      display: none !important;
    `
  );
  return {
    card: css`
      position: relative;

      overflow: hidden;

      border: 1px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG}px;

      background: ${token.colorBgContainer};
    `,
    color: css`
      border-inline-end: 1px solid ${token.colorBorderSecondary};
      font-family: ${token.fontFamilyCode};

      &:hover {
        .color-text {
          display: none;
        }

        .copy {
          display: flex !important;
        }
      }
    `,
    colorText,
    copy,
    row: css`
      border-block-start: 1px solid ${token.colorFillSecondary};
    `,
    title: css`
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    `,
    titleRow: css`
      margin-block-start: -8px;

      &:hover {
        .copy {
          display: flex;
        }
      }
    `
  };
});
var IconItem = (0, import_react.memo)(({ children, title, color, id }) => {
  const { styles } = useStyles();
  const ref = (0, import_react.useRef)(null);
  const handleDownload = () => {
    var _a, _b;
    const svgString = String((_b = (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.querySelector("svg")) == null ? void 0 : _b.outerHTML);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${id.toLowerCase()}.svg`;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { className: styles.card }, /* @__PURE__ */ React.createElement(import_dumi.Link, { style: { color: "inherit" }, to: `/components/${(0, import_utils.customKebabCase)(id)}` }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Center, { height: 96, style: { position: "relative" }, width: "100%" }, children)), /* @__PURE__ */ React.createElement(
    import_react_layout_kit.Flexbox,
    {
      align: "center",
      className: styles.titleRow,
      horizontal: true,
      justify: "space-between",
      paddingBlock: 8,
      paddingInline: 12,
      width: "100%"
    },
    /* @__PURE__ */ React.createElement("h2", { className: styles.title }, title),
    /* @__PURE__ */ React.createElement(import_ui.CopyButton, { className: styles.copy, content: title, size: "small" })
  ), /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", className: styles.row, horizontal: true }, /* @__PURE__ */ React.createElement(
    import_react_layout_kit.Center,
    {
      className: styles.color,
      flex: 1,
      height: 32,
      horizontal: true,
      paddingInline: 12,
      style: { background: color, color: (0, import_polished.readableColor)(color) }
    },
    /* @__PURE__ */ React.createElement("span", { className: styles.colorText }, color.toUpperCase()),
    /* @__PURE__ */ React.createElement(
      import_ui.CopyButton,
      {
        className: styles.copy,
        color: (0, import_polished.readableColor)(color),
        content: color.toUpperCase(),
        size: "small"
      }
    )
  ), /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { flex: 1, horizontal: true, paddingInline: 12 }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Center, { flex: 1, height: 32 }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: `https://lobehub.com/icons/${(0, import_utils.customKebabCase)(id)}`,
      rel: "noreferrer",
      style: { color: "inherit" },
      target: "_blank"
    },
    /* @__PURE__ */ React.createElement(import_ui.ActionIcon, { icon: import_lucide_react.SearchIcon, size: "small" })
  )), /* @__PURE__ */ React.createElement(import_react_layout_kit.Center, { flex: 1, height: 32, onClick: handleDownload }, /* @__PURE__ */ React.createElement(import_ui.ActionIcon, { icon: import_lucide_react.DownloadIcon, size: "small" })))));
});
var IconItem_default = IconItem;
