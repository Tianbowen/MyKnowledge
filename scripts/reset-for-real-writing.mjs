import fs from "fs"
import path from "path"

const del = [
  "content/Journal/2026-08-10.md",
  "content/Journal/2026-08-12.md",
  "content/Journal/2026-08-13.md",
  "content/Knowledge/知识因链接而增值.md",
  "content/Knowledge/原子笔记的三个标准.md",
  "content/Knowledge/物件-书脊.md",
  "content/Reading/如何阅读一本书的一章.md",
  "content/Reading/摘抄为什么常常失效.md",
  "content/Growth/每天十五分钟的微循环.md",
  "content/Growth/把品味算进学习.md",
  "content/Taste/手冲的三分钟专注.md",
  "content/Taste/夜场电影与情绪余震.md",
  "content/Taste/一碗面里的场景记忆.md",
  "content/Taste/物件-咖啡杯.md",
  "content/Taste/物件-电影票根.md",
]

for (const p of del) {
  if (fs.existsSync(p)) {
    fs.unlinkSync(p)
    console.log("deleted", p)
  }
}

const w = (p, t) => {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, t, "utf8")
  console.log("wrote", p)
}

w(
  "content/index.md",
  `---
title: Erwin
description: 第 01 期 · 知识花园创刊号
unlisted: true
tags:
  - 站点/首页
  - 期号/01
---

<div class="erwin-hero erwin-hero--full">
<div class="erwin-hero-media" aria-hidden="true"></div>
<div class="erwin-hero-veil" aria-hidden="true"></div>
<div class="erwin-hero-copy">
<p class="erwin-kicker">第 01 期 · 暖阳</p>
<h1 class="erwin-hero-title">Erwin</h1>
<p class="erwin-hero-slogan">学习 · 联结 · 成长</p>
<p class="erwin-hero-lead">一座慢下来的知识花园：把阅读变成可复用的领悟，把成长写成下一步，也把咖啡、美食与电影里的感受留下温度。</p>
<div class="erwin-hero-actions">
<a class="erwin-btn erwin-btn--ember" href="./knowledge/" data-no-popover="true">进入知识</a>
<a class="erwin-btn erwin-btn--ghost" href="./method" data-no-popover="true">写作方法</a>
</div>
</div>
<a class="erwin-scroll" href="#magazine" data-no-popover="true">继续阅读本季专题</a>
</div>

<section id="magazine" class="erwin-mag">
<div class="erwin-mag-intro">
<p class="erwin-kicker">本期专题</p>
<h2 class="erwin-mag-title">本季专题</h2>
<p class="erwin-mag-lead">栏目已就绪。打开「写作方法」，按模板写下第一篇真实笔记。</p>
</div>
<div class="erwin-mag-spread">
<a class="erwin-feature erwin-feature--lead" href="./knowledge/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--garden" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">封面故事</span><span class="erwin-feature-title">知识</span><span class="erwin-feature-desc">概念与方法，慢慢长成可复用的网络。</span></span></a>
<div class="erwin-feature-stack">
<a class="erwin-feature" href="./reading/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--read" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">窗边</span><span class="erwin-feature-title">阅读</span><span class="erwin-feature-desc">书与文章的消化，而不是收藏。</span></span></a>
<a class="erwin-feature" href="./growth/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--grow" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">小径</span><span class="erwin-feature-title">成长</span><span class="erwin-feature-desc">习惯、能力与下一小步。</span></span></a>
</div>
</div>
<div class="erwin-mag-spread erwin-mag-spread--reverse">
<a class="erwin-feature erwin-feature--lead" href="./taste/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--taste" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">生活</span><span class="erwin-feature-title">品味</span><span class="erwin-feature-desc">咖啡、美食与电影——感官也值得被认真记录。</span></span></a>
<div class="erwin-feature-stack">
<a class="erwin-feature" href="./journal/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--journal" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">手账</span><span class="erwin-feature-title">日记</span><span class="erwin-feature-desc">经历、感受，与明天只做一步。</span></span></a>
<a class="erwin-feature" href="./maps/知识地图" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--map" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">地图</span><span class="erwin-feature-title">知识地图</span><span class="erwin-feature-desc">主题漫游，像杂志目录页。</span></span></a>
</div>
</div>
</section>

<section class="erwin-strip">
<div class="erwin-strip-quote">
<p>少追求完美系统，多完成一次诚实的思考。</p>
<span>第 01 期 · 开始写作</span>
</div>
<div class="erwin-strip-links">
<a href="./method" data-no-popover="true">写作方法</a>
<a href="./about" data-no-popover="true">关于</a>
<a href="./maps/知识地图" data-no-popover="true">知识地图</a>
</div>
</section>
`,
)

w(
  "content/Method.md",
  `---
title: 写作方法
description: 如何在 Erwin 里添加、分类与整理文章
kind: essay
seat: 写作方法
issue: "01"
status: evergreen
tended: 2026-08-13
tags:
  - 站点/方法
takeaways:
  - 先选栏目文件夹，再套模板写 frontmatter。
  - 分类靠文件夹 + 标签 + 链接，不必一次完美。
  - 写完本地预览，确认无误再部署。
continues:
  - title: 知识地图
    href: /Maps/知识地图
  - title: 关于
    href: /About
---

这份说明只做一件事：让你之后加文章时，知道**放哪里、写什么字段、怎么整理**。

## 1. 先看清栏目（文件夹）

内容都在 \`content/\` 下。按主题放进对应文件夹即可：

| 文件夹 | 适合写什么 |
| --- | --- |
| \`Knowledge/\` | 可复用的概念、常青卡片 |
| \`Reading/\` | 读书/文章消化、长文笔记 |
| \`Growth/\` | 习惯、能力、下一步行动 |
| \`Taste/\` | 咖啡、美食、电影与物件 |
| \`Journal/\` | 日记与复盘 |
| \`Maps/\` | 总览地图（一般少改） |
| \`templates/\` | 模板（默认不发布到网站） |

首页、关于页、本页分别是 \`index.md\`、\`About.md\`、\`Method.md\`。

## 2. 用模板新建（推荐）

模板在 \`content/templates/\`：

- \`知识卡片.md\` → 短、可链、自己的话
- \`长文.md\` → 阅读或专题长文
- \`品味记录.md\` → 咖啡/美食/电影感受
- \`物件.md\` → 一物一文
- \`日记.md\` → 日记

**操作步骤（Obsidian）：**

1. 打开对应栏目文件夹（如 \`Reading/\`）。
2. 从模板新建笔记，或复制模板内容到新文件。
3. 改文件名（建议中文，清晰即可）。
4. 填写文首 YAML（见下一节）。
5. 写正文；需要时用 \`[[其他笔记]]\` 做链接。

**操作步骤（直接改文件）：**

1. 复制模板到目标文件夹并重命名。
2. 用编辑器改 YAML 与正文。
3. 保存为 UTF-8。

## 3. 文首字段怎么填

每篇文章顶部用 \`---\` 包住的字段，决定页面怎么显示：

\`\`\`yaml
---
title: 标题
description: 一句话导语
kind: essay
seat: 阅读
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 主题/阅读
takeaways:
  - 要点一
  - 要点二
continues:
  - title: 另一篇文章
    href: /Reading/另一篇文章
---
\`\`\`

常用字段：

| 字段 | 含义 | 常用取值 |
| --- | --- | --- |
| \`kind\` | 文体样式 | \`essay\` 长文 · \`card\` 知识卡 · \`object\` 物件 · \`journal\` 日记 · \`section\` 栏目页 |
| \`seat\` | 页头「座位」 | 阅读 / 知识 / 品味 / 日记 / 成长 |
| \`issue\` | 期号 | \`"01"\` 会显示为「第 01 期」 |
| \`status\` | 生长状态 | \`seed\` 种子 · \`growing\` 生长中 · \`evergreen\` 常青 |
| \`tended\` | 上次照料日期 | \`YYYY-MM-DD\` |
| \`tags\` | 标签 | 如 \`主题/阅读\`、\`日记/每日\`、\`物件\` |
| \`takeaways\` | 本篇要点 | 文末自动列出 |
| \`continues\` | 继续读 | 文末人工推荐链接 |
| \`draft: true\` | 草稿 | 构建时不发布 |
| \`unlisted: true\` | 不收录 | 有链接可打开，但不进搜索/列表 |

私密内容可放进 \`content/private/\`（已配置忽略，不会上线）。

## 4. 分类与整理的实用顺序

不必追求一次归档完美，按这个顺序就够用：

1. **先写下**（哪怕放错文件夹）。
2. **再归位**：进哪个栏目？知识 / 阅读 / 成长 / 品味 / 日记。
3. **再贴标签**：\`主题/...\`、\`品味/咖啡\`、\`类型/常青\` 等。
4. **再长链接**：至少连向一篇相关笔记或知识地图。
5. **再改状态**：\`seed\` → \`growing\` → \`evergreen\`，并更新 \`tended\`。

思想透镜（不是文件夹名）：

- **Inbox**：先接住，不急着定义。
- **PARA**：此刻是要推进、长期维护、仅参考，还是归档。
- **Zettelkasten**：值得留下的，写成可链接的一张卡。
- **Journal**：记录发生了什么、学到什么、明天一步。

## 5. 本地预览与上线

在项目根目录执行：

\`\`\`powershell
npx quartz build --serve --port 8081
\`\`\`

浏览器打开 \`http://localhost:8081\`，硬刷新查看新文章。

确认无误后，再按你的 GitHub / Vercel 流程推送部署（若尚未接好远程，可先只在本地写）。

## 6. 建议的第一篇

任选其一即可：

1. 在 \`Journal/\` 用日记模板写今天。
2. 在 \`Reading/\` 用长文模板写最近读过的一章。
3. 在 \`Knowledge/\` 用知识卡片模板写一个稳定看法。

写完后回到本页，对照字段是否齐全；然后去对应栏目页确认列表里出现了它。
`,
)

const section = (title, kicker, lead, extra = "") => `---
kind: section
title: ${title}
description: ${lead}
tags:
  - 主题/${title === "日记" ? "日记" : title === "知识" ? "知识" : title === "阅读" ? "阅读" : title === "成长" ? "成长" : "品味"}
---

<div class="erwin-section-head">
<p class="erwin-kicker">${kicker}</p>
<p class="erwin-section-lead">${lead}</p>
</div>

<p>尚无文章。打开 <a href="../method" data-no-popover="true">写作方法</a>，用模板在此文件夹新建第一篇。</p>
${extra}
`

w("content/Knowledge/index.md", section("知识", "书架 · 知识", "一张卡片一个想法。可漫游，也可深读。"))
w("content/Reading/index.md", section("阅读", "窗边 · 阅读", "书与文章的消化，而不是收藏。"))
w("content/Growth/index.md", section("成长", "小径 · 成长", "习惯、能力与下一小步。"))
w(
  "content/Taste/index.md",
  `---
kind: section
title: 品味
description: 咖啡 · 美食 · 电影
tags:
  - 主题/品味
---

<div class="erwin-section-head">
<p class="erwin-kicker">吧台 · 品味</p>
<p class="erwin-section-lead">感官经验也可以进入知识网络。</p>
</div>

<p>子栏目：<a href="./咖啡" data-no-popover="true">咖啡</a> · <a href="./美食" data-no-popover="true">美食</a> · <a href="./电影" data-no-popover="true">电影</a></p>
<p>尚无文章。打开 <a href="../method" data-no-popover="true">写作方法</a>，从品味记录或物件模板开始。</p>
`,
)
w(
  "content/Journal/index.md",
  `---
kind: section
title: 日记
description: 手账岸
tags:
  - 主题/日记
---

<div class="erwin-section-head">
<p class="erwin-kicker">手账 · 日记</p>
<p class="erwin-section-lead">发生了什么，学到什么，明天只做一步。</p>
</div>

<p>尚无日记。打开 <a href="../method" data-no-popover="true">写作方法</a>，用日记模板写下今天。</p>
`,
)

w(
  "content/Maps/知识地图.md",
  `---
kind: section
title: 知识地图
description: 漫游 Erwin 的主题岛屿
tags:
  - 地图
  - 期号/01
---

<div class="erwin-map">
<p class="erwin-kicker">地图 · 漫游</p>
<p class="erwin-map-lead">不按文件夹走路，而按岛屿漫游。如何添加与整理文章，见 <a href="../method" data-no-popover="true">写作方法</a>。</p>
<div class="erwin-map-grid">
<a class="erwin-island erwin-island--knowledge" href="../knowledge/" data-no-popover="true"><span>知识岛</span><em>概念与可复用领悟</em></a>
<a class="erwin-island erwin-island--reading" href="../reading/" data-no-popover="true"><span>阅读湾</span><em>窗边消化输入</em></a>
<a class="erwin-island erwin-island--growth" href="../growth/" data-no-popover="true"><span>成长径</span><em>长期维护的能力</em></a>
<a class="erwin-island erwin-island--taste" href="../taste/" data-no-popover="true"><span>品味湾</span><em>咖啡·美食·电影</em></a>
<a class="erwin-island erwin-island--journal" href="../journal/" data-no-popover="true"><span>手账岸</span><em>经历与下一步</em></a>
<a class="erwin-island erwin-island--studio" href="../method" data-no-popover="true"><span>写作方法</span><em>添加与整理指南</em></a>
</div>
</div>
`,
)

w(
  "content/About.md",
  `---
kind: section
title: 关于
description: Erwin 的知识花园
tags:
  - 站点/关于
---

# 关于

我是 **Erwin**。这里记录学习、成长，以及咖啡与电影留下的温度。

公开的一面是杂志式知识花园；写作与整理方式见 [[Method|写作方法]]。
`,
)

// Refresh templates: clear broken empty continues defaults lightly
w(
  "content/templates/知识卡片.md",
  `---
title: "{{title}}"
description: 
kind: card
seat: 知识
issue: "01"
status: seed
tended: {{date}}
tags:
  - 类型/常青
takeaways:
  - 
continues: []
---

## 用自己的话

## 链接

- [[]]
`,
)

w(
  "content/templates/长文.md",
  `---
title: "{{title}}"
description: 
kind: essay
seat: 阅读
issue: "01"
status: growing
tended: {{date}}
tags:
  - 主题/阅读
takeaways:
  - 
  - 
continues: []
---

## 正文

`,
)

w(
  "content/templates/品味记录.md",
  `---
title: "{{title}}"
description: 
kind: essay
seat: 品味
issue: "01"
status: seed
tended: {{date}}
tags:
  - 主题/品味
takeaways:
  - 
continues: []
---

## 对象

## 感受

## 若抽象成知识，可链向

- [[]]
`,
)

w(
  "content/templates/物件.md",
  `---
title: "物件·{{title}}"
description: 
kind: object
seat: 品味
issue: "01"
status: seed
tended: {{date}}
tags:
  - 物件
takeaways:
  - 
continues: []
---

## 看见什么

## 它如何把门打开
`,
)

w(
  "content/templates/日记.md",
  `---
title: "{{date}}"
description: 
kind: journal
seat: 日记
issue: "01"
status: seed
tended: {{date}}
tags:
  - 日记/每日
takeaways:
  - 
continues: []
---

## 发生了什么

## 感受到什么 / 学到了什么

## 明天只做一步
`,
)

console.log("reset complete")
