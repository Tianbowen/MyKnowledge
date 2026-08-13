import fs from "fs"
import path from "path"

const tagMap = {
  "日记/每日": "日记/每日",
  "类型/常青": "类型/常青",
  "主题/阅读": "主题/阅读",
  "主题/知识": "主题/知识",
  "主题/成长": "主题/成长",
  "主题/品味": "主题/品味",
  "主题/日记": "主题/日记",
  "品味/咖啡": "品味/咖啡",
  "品味/美食": "品味/美食",
  "品味/电影": "品味/电影",
  "品味/电影": "品味/电影",
  object: "物件",
  "期号/01": "期号/01",
  "站点/首页": "站点/首页",
  "站点/方法": "站点/方法",
  "站点/关于": "站点/关于",
  moc: "地图",
}

const textMap = [
  ["封面故事", "封面故事"],
  ["生活", "生活"],
  [">成长</", ">成长</"],
  [">地图</", ">地图</"],
  [">长文</", ">长文</"],
  [">笔记</", ">笔记</"],
  [">咖啡</", ">咖啡</"],
  [">电影</", ">电影</"],
  [">美食</", ">美食</"],
  [">物件</", ">物件</"],
  [">常青</", ">常青</"],
  [">练习</", ">练习</"],
  [">心态</", ">心态</"],
  ["本季物件 · 一物一文", "本季物件 · 一物一文"],
  ["本期专题", "本期专题"],
  ["第 01 期 · 暖阳", "第 01 期 · 暖阳"],
  ["第 01 期 · 暖阳", "第 01 期 · 暖阳"],
  ["第 01 期 · 知识花园创刊号", "第 01 期 · 知识花园创刊号"],
  ["第 01 期 · 春末创刊", "第 01 期 · 春末创刊"],
  ["第 01 期 · 春末创刊", "第 01 期 · 春末创刊"],
  ["学习 · 联结 · 成长", "学习 · 联结 · 成长"],
  ["书架 · 知识", "书架 · 知识"],
  ["窗边 · 阅读", "窗边 · 阅读"],
  ["小径 · 成长", "小径 · 成长"],
  ["吧台 · 品味", "吧台 · 品味"],
  ["地图 · 漫游", "地图 · 漫游"],
  ["日记/每日", "日记/每日"],
  ["类型/常青", "类型/常青"],
  ["主题/阅读", "主题/阅读"],
  ["主题/知识", "主题/知识"],
  ["主题/成长", "主题/成长"],
  ["主题/品味", "主题/品味"],
  ["主题/日记", "主题/日记"],
  ["品味/咖啡", "品味/咖啡"],
  ["品味/美食", "品味/美食"],
  ["品味/电影", "品味/电影"],
  ["品味/电影", "品味/电影"],
  ["期号/01", "期号/01"],
  ["站点/首页", "站点/首页"],
  ["站点/方法", "站点/方法"],
  ["站点/关于", "站点/关于"],
  ["\n  - 物件\n", "\n  - 物件\n"],
  ["\n  - 地图\n", "\n  - 地图\n"],
  ["- 物件\n", "- 物件\n"],
  ["- 地图\n", "- 地图\n"],
]

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (/\.(md|mjs)$/.test(ent.name)) out.push(p)
  }
  return out
}

let changed = 0
for (const file of walk("content").concat(walk("scripts"))) {
  let text = fs.readFileSync(file, "utf8")
  let next = text
  for (const [from, to] of textMap) next = next.split(from).join(to)
  // tag lines that are exactly "object" already handled; also replace standalone object tag variants
  for (const [from, to] of Object.entries(tagMap)) {
    next = next.replaceAll(`- ${from}`, `- ${to}`)
  }
  if (next !== text) {
    fs.writeFileSync(file, next, "utf8")
    changed++
    console.log("updated", file)
  }
}

console.log("files changed:", changed)
