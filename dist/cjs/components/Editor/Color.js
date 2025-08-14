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

// src/components/Editor/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_ui = require("@lobehub/ui");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var useStyles = (0, import_antd_style.createStyles)(({ css }) => {
  return {
    code: css`
      pre {
        padding: 8px !important;
      }

      code {
        font-size: 12px;
        text-wrap: initial;
      }
    `
  };
});
var Preview = (0, import_react.memo)(({ svg, title, viewbox }) => {
  const { styles } = useStyles();
  return /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { flex: "none", gap: 16, style: { position: "relative", width: "100%" } }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { align: "center", gap: 8, horizontal: true }, /* @__PURE__ */ React.createElement("h3", { style: { lineHeight: 1, margin: 0 } }, title)), /* @__PURE__ */ React.createElement(import_ui.Highlighter, { className: styles.code, language: "tsx" }, `'use client';

import { memo } from 'react';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="${viewbox}"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      ${svg}
    </svg>
  );
});

export default Icon;
`));
});
var Color_default = Preview;
