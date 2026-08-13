import fs from "fs"

const files = {
  "content/Method.md": (t) =>
    t
      .replace(/^title: Method · 后厨/m, "title: 方法 · 后厨")
      .replace(/^# Method · 后厨/m, "# 方法 · 后厨"),
  "content/About.md": (t) =>
    t
      .replace(/^title: About · Studio/m, "title: 关于 · 工作室")
      .replace(/^# About · 工作室背面/m, "# 关于 · 工作室背面")
      .replace("Issue 创刊号", "创刊号"),
  "content/index.md": (t) =>
    t
      .replace("Method · 后厨思想", "方法 · 后厨思想")
      .replace("About · 工作室背面", "关于 · 工作室背面"),
  "content/Maps/知识地图.md": (t) =>
    t.replace(
      '见 <a href="../method" data-no-popover="true">Method</a>',
      '见 <a href="../method" data-no-popover="true">方法</a>',
    ),
  "content/Journal/2026-08-13.md": (t) =>
    t
      .replace("description: Issue 01 成形的一天", "description: 第 01 期成形的一天")
      .replace("title: Method · 后厨", "title: 方法 · 后厨")
      .replace("知识花园 Issue 01", "知识花园第 01 期"),
  "content/Journal/2026-08-10.md": (t) => t.replace("title: Method · 后厨", "title: 方法 · 后厨"),
  "content/Journal/2026-08-12.md": (t) => t.replace("title: Method · 后厨", "title: 方法 · 后厨"),
}

for (const [file, fn] of Object.entries(files)) {
  if (!fs.existsSync(file)) continue
  const before = fs.readFileSync(file, "utf8")
  const after = fn(before)
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8")
    console.log("updated", file)
  }
}

// templates Method references in continues if any
for (const file of [
  "content/templates/日记.md",
  "content/templates/知识卡片.md",
  "scripts/write-erwin-content.mjs",
]) {
  if (!fs.existsSync(file)) continue
  let t = fs.readFileSync(file, "utf8")
  const n = t
    .replaceAll("Method · 后厨", "方法 · 后厨")
    .replaceAll("About · Studio", "关于 · 工作室")
    .replaceAll("Learn · Link · Grow", "学习 · 联结 · 成长")
  if (n !== t) {
    fs.writeFileSync(file, n, "utf8")
    console.log("updated", file)
  }
}

console.log("done")
