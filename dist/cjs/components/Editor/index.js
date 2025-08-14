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

// src/components/Editor/index.tsx
var Editor_exports = {};
__export(Editor_exports, {
  default: () => Editor_default
});
module.exports = __toCommonJS(Editor_exports);
var import_storybook = require("@lobehub/ui/storybook");
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_react_layout_kit = require("react-layout-kit");
var import_useSvgo = require("./useSvgo");
var import_Color = __toESM(require("./Color"));
var import_Mono = __toESM(require("./Mono"));
var import_Preview = __toESM(require("./Preview"));
var import_Text = __toESM(require("./Text"));
var import_data = require("./data");
var import_svgo = require("./svgo");
var useStyles = (0, import_antd_style.createStyles)(({ css, token }) => {
  return {
    container: css`
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;
    `
  };
});
var Editor_default = () => {
  const colorRef = (0, import_react.useRef)(null);
  const monoRef = (0, import_react.useRef)(null);
  const [viewbox, setViewbox] = (0, import_react.useState)("0 0 24 24");
  const [colorSvg, setColorSvg] = (0, import_react.useState)("");
  const [monoSvg, setMonoSvg] = (0, import_react.useState)("");
  const { styles } = useStyles();
  const levaStore = (0, import_storybook.useCreateStore)();
  const { svg, text } = (0, import_storybook.useControls)(
    {
      svg: {
        rows: true,
        value: import_data.svgIcon
      },
      text: false
    },
    { store: levaStore }
  );
  const config = (0, import_storybook.useControls)("Config", import_svgo.defaultPlugins, { collapsed: true }, { store: levaStore });
  const removeColor = {
    addAttributesToSVGElement: {
      attribute: {
        "fill": "currentColor",
        "fill-rule": "evenodd"
      }
    },
    collapseGroups: true,
    removeAttrs: {
      attrs: ["fill", "color", "stroke", "stroke-width", "fill-rule"]
    }
  };
  const compression = (0, import_useSvgo.useSvgo)(svg, config);
  const mono = (0, import_useSvgo.useSvgo)(svg, { ...config, ...removeColor });
  (0, import_react.useEffect)(() => {
    var _a, _b;
    if (mono.isLoading)
      return setMonoSvg("loading...");
    setMonoSvg(((_b = (_a = monoRef == null ? void 0 : monoRef.current) == null ? void 0 : _a.querySelector("svg")) == null ? void 0 : _b.innerHTML) || "");
  }, [mono]);
  (0, import_react.useEffect)(() => {
    var _a, _b, _c, _d;
    if (compression.isLoading)
      return setColorSvg("loading...");
    setColorSvg(((_b = (_a = colorRef == null ? void 0 : colorRef.current) == null ? void 0 : _a.querySelector("svg")) == null ? void 0 : _b.innerHTML) || "");
    const viewBox = (_d = (_c = colorRef == null ? void 0 : colorRef.current) == null ? void 0 : _c.querySelector("svg")) == null ? void 0 : _d.viewBox.baseVal;
    if (viewBox) {
      setViewbox(`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    }
  }, [compression]);
  return /* @__PURE__ */ React.createElement(import_storybook.StoryBook, { className: styles.container, levaStore, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(import_react_layout_kit.Flexbox, { gap: 32, style: { overflow: "hidden", width: "100%" } }, /* @__PURE__ */ React.createElement(import_Preview.default, { svg, title: "Original" }), /* @__PURE__ */ React.createElement(
    import_Preview.default,
    {
      precent: compression.precent,
      ref: colorRef,
      svg: compression.svg,
      title: "Compression"
    }
  ), /* @__PURE__ */ React.createElement(import_Preview.default, { precent: mono.precent, ref: monoRef, svg: mono.svg, title: "Monochrome" }), text ? /* @__PURE__ */ React.createElement(import_Text.default, { svg: monoSvg, title: "Text", viewbox }) : /* @__PURE__ */ React.createElement(import_Mono.default, { svg: monoSvg, title: "Mono", viewbox }), /* @__PURE__ */ React.createElement(import_Color.default, { svg: colorSvg, title: "Color", viewbox })));
};
