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

// src/components/DownloadButton/index.tsx
var DownloadButton_exports = {};
__export(DownloadButton_exports, {
  default: () => DownloadButton_default
});
module.exports = __toCommonJS(DownloadButton_exports);
var import_ui = require("@lobehub/ui");
var import_lucide_react = require("lucide-react");
var import_react = require("react");
var DownloadButton = (0, import_react.memo)(({ className, onClick, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    import_ui.ActionIcon,
    {
      ...rest,
      className,
      glass: true,
      icon: import_lucide_react.Download,
      onClick,
      title: "Download"
    }
  );
});
var DownloadButton_default = DownloadButton;
