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

// src/features/modelConfig.ts
var modelConfig_exports = {};
__export(modelConfig_exports, {
  modelMappings: () => modelMappings
});
module.exports = __toCommonJS(modelConfig_exports);
var import_Adobe = __toESM(require("../Adobe"));
var import_Ai21 = __toESM(require("../Ai21"));
var import_Ai360 = __toESM(require("../Ai360"));
var import_AiHubMix = __toESM(require("../AiHubMix"));
var import_AiMass = __toESM(require("../AiMass"));
var import_AionLabs = __toESM(require("../AionLabs"));
var import_Anthropic = __toESM(require("../Anthropic"));
var import_AssemblyAI = __toESM(require("../AssemblyAI"));
var import_Aws = __toESM(require("../Aws"));
var import_Aya = __toESM(require("../Aya"));
var import_Baichuan = __toESM(require("../Baichuan"));
var import_BaiduCloud = __toESM(require("../BaiduCloud"));
var import_Bilibili = __toESM(require("../Bilibili"));
var import_BilibiliIndex = __toESM(require("../BilibiliIndex"));
var import_BurnCloud = __toESM(require("../BurnCloud"));
var import_ByteDance = __toESM(require("../ByteDance"));
var import_ChatGLM = __toESM(require("../ChatGLM"));
var import_Claude = __toESM(require("../Claude"));
var import_CodeGeeX = __toESM(require("../CodeGeeX"));
var import_CogView = __toESM(require("../CogView"));
var import_Cohere = __toESM(require("../Cohere"));
var import_Dalle = __toESM(require("../Dalle"));
var import_Dbrx = __toESM(require("../Dbrx"));
var import_DeepMind = __toESM(require("../DeepMind"));
var import_DeepSeek = __toESM(require("../DeepSeek"));
var import_Dolphin = __toESM(require("../Dolphin"));
var import_Doubao = __toESM(require("../Doubao"));
var import_Fireworks = __toESM(require("../Fireworks"));
var import_FishAudio = __toESM(require("../FishAudio"));
var import_Flux = __toESM(require("../Flux"));
var import_GLMV = __toESM(require("../GLMV"));
var import_Gemini = __toESM(require("../Gemini"));
var import_Gemma = __toESM(require("../Gemma"));
var import_Google = __toESM(require("../Google"));
var import_Grok = __toESM(require("../Grok"));
var import_Hunyuan = __toESM(require("../Hunyuan"));
var import_IBM = __toESM(require("../IBM"));
var import_Ideogram = __toESM(require("../Ideogram"));
var import_Inflection = __toESM(require("../Inflection"));
var import_InternLM = __toESM(require("../InternLM"));
var import_Jina = __toESM(require("../Jina"));
var import_Kolors = __toESM(require("../Kolors"));
var import_LG = __toESM(require("../LG"));
var import_LLaVA = __toESM(require("../LLaVA"));
var import_Liquid = __toESM(require("../Liquid"));
var import_Menlo = __toESM(require("../Menlo"));
var import_Meta = __toESM(require("../Meta"));
var import_Microsoft = __toESM(require("../Microsoft"));
var import_Minimax = __toESM(require("../Minimax"));
var import_Mistral = __toESM(require("../Mistral"));
var import_Moonshot = __toESM(require("../Moonshot"));
var import_NousResearch = __toESM(require("../NousResearch"));
var import_Nvidia = __toESM(require("../Nvidia"));
var import_OpenAI = __toESM(require("../OpenAI"));
var import_OpenChat = __toESM(require("../OpenChat"));
var import_OpenRouter = __toESM(require("../OpenRouter"));
var import_PaLM = __toESM(require("../PaLM"));
var import_Perplexity = __toESM(require("../Perplexity"));
var import_Phind = __toESM(require("../Phind"));
var import_Qiniu = __toESM(require("../Qiniu"));
var import_Qwen = __toESM(require("../Qwen"));
var import_Rwkv = __toESM(require("../Rwkv"));
var import_SenseNova = __toESM(require("../SenseNova"));
var import_Skywork = __toESM(require("../Skywork"));
var import_Spark = __toESM(require("../Spark"));
var import_Stability = __toESM(require("../Stability"));
var import_Stepfun = __toESM(require("../Stepfun"));
var import_Suno = __toESM(require("../Suno"));
var import_TII = __toESM(require("../TII"));
var import_Udio = __toESM(require("../Udio"));
var import_Upstage = __toESM(require("../Upstage"));
var import_V0 = __toESM(require("../V0"));
var import_VertexAI = __toESM(require("../VertexAI"));
var import_Voyage = __toESM(require("../Voyage"));
var import_Wenxin = __toESM(require("../Wenxin"));
var import_Yi = __toESM(require("../Yi"));
var import_ZAI = __toESM(require("../ZAI"));
var modelMappings = [
  { Icon: import_OpenAI.default, keywords: ["gpt-3"], props: { type: "gpt3" } },
  { Icon: import_OpenAI.default, keywords: ["gpt-4"], props: { type: "gpt4" } },
  { Icon: import_OpenAI.default, keywords: ["gpt-5"], props: { type: "gpt5" } },
  { Icon: import_OpenAI.default, keywords: ["gpt-oss"], props: { type: "oss" } },
  {
    Icon: import_OpenAI.default,
    keywords: ["o1-", "^o1", "/o1", "o3-", "^o3", "/o3", "o4-", "^o4", "/o4"],
    props: { type: "o1" }
  },
  { Icon: import_Dalle.default, keywords: ["dalle", "dall-e"] },
  {
    Icon: import_OpenAI.default,
    keywords: [
      "text-embedding-",
      "tts-",
      "whisper-",
      "codex",
      "davinci",
      "babbage",
      "omni-moderation",
      "text-moderation",
      "text-adb",
      "text-ada",
      "computer-use"
    ],
    props: { type: "platform" }
  },
  {
    Icon: import_OpenAI.default,
    keywords: ["^gpt-", "/gpt-", "openai"]
  },
  { Icon: import_GLMV.default, keywords: ["^glm-(.*)v", "/glm-(.*)v"] },
  { Icon: import_ZAI.default, keywords: ["^glm-4", "/glm-4"] },
  { Icon: import_ChatGLM.default, keywords: ["^glm-", "/glm-", "chatglm"] },
  { Icon: import_CodeGeeX.default, keywords: ["^codegeex", "/codegeex"] },
  { Icon: import_Claude.default, keywords: ["claude"] },
  { Icon: import_Anthropic.default, keywords: ["anthropic"] },
  { Icon: import_Aws.default, keywords: ["titan"] },
  { Icon: import_Fireworks.default, keywords: ["accounts/fireworks/models/fire"] },
  { Icon: import_InternLM.default, keywords: ["internlm", "internvl"] },
  { Icon: import_NousResearch.default, keywords: ["deephermes", "hermes", "genstruct", "minos"] },
  { Icon: import_Nvidia.default, keywords: ["nemotron", "openreasoning"] },
  { Icon: import_Meta.default, keywords: ["llama", "/l3"] },
  { Icon: import_LLaVA.default, keywords: ["llava"] },
  { Icon: import_Gemini.default, keywords: ["gemini"] },
  { Icon: import_DeepMind.default, keywords: ["^imagen-", "/imagen-", "^imagen\\d/"] },
  { Icon: import_Gemma.default, keywords: ["gemma"] },
  { Icon: import_Moonshot.default, keywords: ["kimi", "moonshot"] },
  { Icon: import_Qiniu.default, keywords: ["qiniu"] },
  { Icon: import_Qwen.default, keywords: ["qwen", "qwq", "qvq", "wanx", "wan\\d/"] },
  { Icon: import_Minimax.default, keywords: ["minimax", "abab", "^image-"] },
  {
    Icon: import_Mistral.default,
    keywords: [
      "mistral",
      "mixtral",
      "codestral",
      "mathstral",
      "/mn-",
      "pixtral",
      "ministral",
      "magistral",
      "devstral",
      "voxtral"
    ]
  },
  { Icon: import_Perplexity.default, keywords: ["pplx", "sonar"] },
  { Icon: import_Yi.default, keywords: ["^yi-", "/yi-", "-yi-"] },
  { Icon: import_OpenRouter.default, keywords: ["^openrouter"] },
  { Icon: import_OpenChat.default, keywords: ["^openchat"] },
  { Icon: import_Aya.default, keywords: ["aya"] },
  { Icon: import_Cohere.default, keywords: ["command"] },
  { Icon: import_Dbrx.default, keywords: ["dbrx"] },
  { Icon: import_Stepfun.default, keywords: ["step"] },
  { Icon: import_AiMass.default, keywords: ["taichu"] },
  { Icon: import_Ai360.default, keywords: ["360gpt", "360zhinao"] },
  { Icon: import_Baichuan.default, keywords: ["baichuan"] },
  { Icon: import_Rwkv.default, keywords: ["rwkv", "/eagle-"] },
  { Icon: import_Wenxin.default, keywords: ["ernie", "irag"] },
  { Icon: import_Jina.default, keywords: ["^jina", "/jina"] },
  { Icon: import_Doubao.default, keywords: ["^ep-", "doubao-"] },
  { Icon: import_Hunyuan.default, keywords: ["hunyuan"] },
  { Icon: import_FishAudio.default, keywords: ["^d_", "^g_", "^wd_"] },
  { Icon: import_ByteDance.default, keywords: ["skylark"] },
  { Icon: import_BurnCloud.default, keywords: ["burncloud"] },
  {
    Icon: import_Stability.default,
    keywords: [
      "stable-diffusion",
      "stable-video",
      "stable-cascade",
      "sdxl",
      "stablelm",
      "^stable-",
      "^sd3",
      "^sd2",
      "^sd1"
    ]
  },
  { Icon: import_Flux.default, keywords: ["flux"] },
  { Icon: import_Suno.default, keywords: ["suno"] },
  { Icon: import_Microsoft.default, keywords: ["wizardlm", "/phi-", "^phi-", "-phi-"] },
  { Icon: import_Adobe.default, keywords: ["firefly"] },
  { Icon: import_Ai21.default, keywords: ["jamba", "^j2-", "ai21"] },
  { Icon: import_Upstage.default, keywords: ["^solar-", "/solar"] },
  { Icon: import_PaLM.default, keywords: ["palm"] },
  { Icon: import_SenseNova.default, keywords: ["SenseChat", "SenseNova"] },
  { Icon: import_Grok.default, keywords: ["^grok-", "/grok-"] },
  { Icon: import_Ideogram.default, keywords: ["ideogram"] },
  {
    Icon: import_Spark.default,
    keywords: [
      "spark",
      "general$",
      "generalv3$",
      "generalv3.5$",
      "4.0ultra$",
      "pro-128k$",
      "^max-32k$",
      "^lite$",
      "^x1$"
    ]
  },
  { Icon: import_Udio.default, keywords: ["udio"] },
  { Icon: import_DeepSeek.default, keywords: ["deepseek"] },
  { Icon: import_Voyage.default, keywords: ["voyage"] },
  { Icon: import_AssemblyAI.default, keywords: ["assemblyai"] },
  { Icon: import_Liquid.default, keywords: ["liquid", "lfm"] },
  { Icon: import_Inflection.default, keywords: ["inflection-"] },
  { Icon: import_AionLabs.default, keywords: ["aion-"] },
  { Icon: import_AiHubMix.default, keywords: ["aihubmix"] },
  { Icon: import_V0.default, keywords: ["^v0-"] },
  { Icon: import_VertexAI.default, keywords: ["^veo-", "/veo-"] },
  { Icon: import_Google.default, keywords: ["google", "learnlm"] },
  { Icon: import_CogView.default, keywords: ["cogview"] },
  { Icon: import_Kolors.default, keywords: ["kolors"] },
  { Icon: import_BaiduCloud.default, keywords: ["baidu", "qianfan"] },
  { Icon: import_Phind.default, keywords: ["phind"] },
  { Icon: import_Dolphin.default, keywords: ["dolphin"] },
  { Icon: import_IBM.default, keywords: ["ibm", "granite"] },
  { Icon: import_Skywork.default, keywords: ["skywork"] },
  { Icon: import_BilibiliIndex.default, keywords: ["bilibili-index"] },
  { Icon: import_Bilibili.default, keywords: ["bilibili"] },
  { Icon: import_LG.default, keywords: ["kmmlu", "exaone", "lgai"] },
  { Icon: import_TII.default, keywords: ["falcon"] },
  { Icon: import_Menlo.default, keywords: ["menlo", "lucy", "jan-nano"] }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  modelMappings
});
