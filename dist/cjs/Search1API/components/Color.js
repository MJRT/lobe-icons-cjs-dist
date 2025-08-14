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

// src/Search1API/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.373 12-12c0-6.628-5.373-12-12-12zm3.581 17.071c-.82.701-1.977 1.051-3.473 1.051-1.528 0-2.73-.345-3.606-1.035-.876-.691-1.313-1.64-1.313-2.847h2.315c.075.53.222.926.442 1.19.402.477 1.09.716 2.066.716.584 0 1.058-.063 1.423-.19.692-.241 1.037-.69 1.037-1.346 0-.382-.17-.68-.508-.89-.339-.204-.876-.386-1.611-.542l-1.257-.276c-1.235-.274-2.083-.57-2.545-.89-.783-.535-1.173-1.372-1.173-2.512 0-1.04.382-1.902 1.147-2.59s1.89-1.032 3.372-1.032c1.239 0 2.294.324 3.169.973.874.648 1.332 1.59 1.375 2.823H14.11c-.043-.698-.355-1.194-.936-1.488-.388-.194-.87-.292-1.445-.292-.641 0-1.152.126-1.534.378-.382.252-.573.604-.573 1.055 0 .415.188.725.565.929.242.137.756.297 1.542.48l2.037.48c.892.21 1.562.492 2.007.843.692.546 1.038 1.336 1.038 2.37 0 1.06-.41 1.941-1.23 2.642z",
        fill: "#0066FF",
        fillRule: "evenodd"
      }
    )
  );
});
var Color_default = Icon;
