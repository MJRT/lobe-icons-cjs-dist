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

// src/components/IconPreview/index.tsx
var IconPreview_exports = {};
__export(IconPreview_exports, {
  default: () => IconPreview_default
});
module.exports = __toCommonJS(IconPreview_exports);
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_DownloadButton = __toESM(require("../DownloadButton"));
var useStyles = (0, import_antd_style.createStyles)(({ css, token, cx }) => {
  return {
    btn: cx(
      "copy-button",
      css`
        position: absolute;
        inset-block-start: 4px;
        inset-inline-end: 4px;
        opacity: 0;
      `
    ),
    container: css`
      position: relative;

      flex: none;

      padding: 12px;
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;

      line-height: 1;

      background: ${token.colorBgContainer};

      &:hover {
        .copy-button {
          opacity: 1;
        }
      }
    `,
    inner: css`
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;

      width: auto;
      min-width: 72px;
      height: 72px;

      font-size: 72px;
      line-height: 1;
    `
  };
});
var IconPreview = (0, import_react.memo)(({ className, children, ...rest }) => {
  const { cx, styles } = useStyles();
  const ref = (0, import_react.useRef)(null);
  const isString = typeof children === "string";
  return /* @__PURE__ */ React.createElement(
    import_react_layout_kit.Flexbox,
    {
      align: "center",
      className: cx(styles.container, className),
      flex: "none",
      justify: "center",
      ...rest
    },
    isString ? /* @__PURE__ */ React.createElement("div", { className: styles.inner, dangerouslySetInnerHTML: { __html: children } }) : /* @__PURE__ */ React.createElement("div", { className: styles.inner }, children),
    /* @__PURE__ */ React.createElement(
      import_DownloadButton.default,
      {
        className: styles.btn,
        onClick: () => {
          var _a, _b;
          const svgString = String((_b = (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.querySelector("svg")) == null ? void 0 : _b.outerHTML);
          const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.download = "icon.svg";
          document.body.append(downloadLink);
          downloadLink.click();
          downloadLink.remove();
          URL.revokeObjectURL(url);
        }
      }
    )
  );
});
var IconPreview_default = IconPreview;
