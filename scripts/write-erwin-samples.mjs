import fs from "fs"
import path from "path"

const w = (p, t) => {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, t, "utf8")
}

const files = {
  "content/About.md": `---
title: About · Studio
description: 花园正面与工作室背面
tags:
  - 站点/关于
---

# About · 工作室背面

公开的一面是杂志花园；背面是 Erwin 的工作室。

## 正面

Issue 创刊号、主题岛屿、一物一文、窗边阅读。

## 背面

用 Inbox / PARA / Zettelkasten / Journal 四种透镜与知识相处——它们是思想，不是目录。详见 [[Method]]。

我是 **Erwin**。这里记录学习、成长，以及咖啡与电影留下的温度。
`,
  "content/Method.md": `---
title: Method · 后厨
description: 花园正面背后的思想操作系统
tags:
  - 站点/方法
---

# Method · 后厨

这里是工作室背面：不谈文件夹，谈如何与信息相处。

## 四种透镜

### Inbox — 允许未完成
先接住，不急着定义。

### PARA — 按当下关系决策
Project / Area / Resource / Archive 是优先级问题，不必等于目录名。

### Zettelkasten — 可生长的节点
一个想法、自己的话、可链接。

### Journal — 经验进入成长
发生了什么，学到什么，明天只做一步。

## 配合顺序

Inbox 接住 → Journal 或直接思考 → Zettel 沉淀 → PARA 决定推进或搁置。

样例：[[Growth/假文-每天十五分钟的微循环]] · [[Knowledge/假文-原子笔记的三个标准]]
`,
  "content/Knowledge/index.md": `---
title: 知识
description: 概念、方法与可复用的领悟
tags:
  - 主题/知识
---

![知识花园](/static/erwin/hero.png)

这里放已经（或正在）内化的想法。

- [[Knowledge/假文-知识因链接而增值]]
- [[Knowledge/假文-原子笔记的三个标准]]
- [[Knowledge/物件-书脊]]
`,
  "content/Knowledge/假文-知识因链接而增值.md": `---
title: 知识因链接而增值
description: 孤立笔记是收藏，联结笔记才是思考
status: evergreen
tags:
  - 类型/常青
  - 期号/01
---

![cover](/static/erwin/hero.png)

一条笔记的价值，不取决于字数，而取决于它能**激活多少其他想法**。

## 三个练习

1. 写完先问：它能连向哪两张已有笔记？
2. 标题写成主张，而不是书名。
3. 允许品味笔记（咖啡、电影）链回抽象主题。

相关：[[Method]] · [[Knowledge/物件-书脊]]
`,
  "content/Knowledge/假文-原子笔记的三个标准.md": `---
title: 原子笔记的三个标准
description: 短、可链、用自己的话
tags:
  - 类型/常青
  - 期号/01
---

## 标准

1. **短**：一张卡片只承载一个想法。
2. **可链**：至少连向一个已有节点或地图。
3. **自己的话**：不是摘抄仓库。

当你不确定时，先用 Inbox 心态接住，再决定是否升级为卡片。
`,
  "content/Knowledge/物件-书脊.md": `---
title: 物件·书脊
description: 一厘米厚度里的世界
tags:
  - 物件
  - 期号/01
---

![book](/static/erwin/topics.png)

书脊是最诚实的宽度：它不夸大，也不隐瞒。

我常在书架前停住，不是为了找某一本，而是为了看见自己这段时间的注意力形状。

> 物件叙事：让一个具体的东西，打开一条可复用的思路。

链向：[[Knowledge/假文-知识因链接而增值]] · [[Reading/假文-如何阅读一本书的一章]]
`,
  "content/Reading/index.md": `---
title: 阅读
description: 窗边·消化输入
tags:
  - 主题/阅读
---

![阅读](/static/erwin/topics.png)

- [[Reading/假文-如何阅读一本书的一章]]
- [[Reading/假文-摘抄为什么常常失效]]
`,
  "content/Reading/假文-如何阅读一本书的一章.md": `---
title: 如何阅读一本书的一章
description: 从输入到可复用输出的慢路径
tags:
  - 主题/阅读
  - 期号/01
---

![read](/static/erwin/topics.png)

## 窗边流程

1. **扫读**：标出结构，不急着做笔记。
2. **提问**：这一章想说服我什么？
3. **转写**：用自己的话写 5 行。
4. **升级**：若有稳定看法，链到 [[Knowledge/假文-原子笔记的三个标准]]。

阅读不是收藏高亮，而是让未来的自己更快想清楚。
`,
  "content/Reading/假文-摘抄为什么常常失效.md": `---
title: 摘抄为什么常常失效
description: 高亮很多，想不起来
tags:
  - 主题/阅读
---

摘抄失效，通常因为停在「保存」，没有走到「转写」与「链接」。

试着只保留一句，并强迫自己回答：它改变了我对哪个问题的看法？
`,
  "content/Growth/index.md": `---
title: 成长
description: 长期维护的能力与习惯
tags:
  - 主题/成长
---

- [[Growth/假文-每天十五分钟的微循环]]
- [[Growth/假文-把品味算进学习]]
`,
  "content/Growth/假文-每天十五分钟的微循环.md": `---
title: 每天十五分钟的微循环
description: 捕获·链接·行动·复盘
tags:
  - 主题/成长
  - 期号/01
---

## 微循环

1. Capture（3 分钟）
2. Link（7 分钟）
3. Act（3 分钟）
4. Reflect（2 分钟）

系统为流通服务。完成一次诚实的循环，比完美分类更接近成长。
`,
  "content/Growth/假文-把品味算进学习.md": `---
title: 把品味算进学习
description: 咖啡与电影也可以训练注意力
tags:
  - 主题/成长
---

学习不只发生在书桌。一杯咖啡的仪式、一部电影的结构，都能训练注意力与感受力。

关键是：写下来，并链回你正在维护的主题。
`,
  "content/Taste/index.md": `---
title: 品味
description: 咖啡 · 美食 · 电影
tags:
  - 主题/品味
---

![品味](/static/erwin/topics.png)

- [[Taste/假文-手冲的三分钟专注]]
- [[Taste/假文-夜场电影与情绪余震]]
- [[Taste/假文-一碗面里的场景记忆]]
- [[Taste/物件-咖啡杯]]
- [[Taste/物件-电影票根]]
- [[Taste/咖啡]] · [[Taste/美食]] · [[Taste/电影]]
`,
  "content/Taste/假文-手冲的三分钟专注.md": `---
title: 手冲的三分钟专注
description: 水温、注水与当下
tags:
  - 主题/品味
  - 品味/咖啡
  - 期号/01
---

![coffee](/static/erwin/topics.png)

手冲要求你同时看见水流与时间。这三分钟里，手机不重要，下一封邮件不重要。

我把它当作注意力的热身：先温杯，再写作。

物件篇：[[Taste/物件-咖啡杯]]
`,
  "content/Taste/物件-咖啡杯.md": `---
title: 物件·咖啡杯
description: 注意力如何被温热唤起
tags:
  - 物件
  - 品味/咖啡
---

杯子的重量提醒身体：现在进入另一段节奏。

它不是生产力道具，而是边界——从刷信息，走到可思考。
`,
  "content/Taste/物件-电影票根.md": `---
title: 物件·电影票根
description: 叙事留下的未解之问
tags:
  - 物件
  - 品味/电影
---

票根很薄，却常比剧情简介更耐久。日期、厅号、座位：记忆的坐标。

看完后只问一句：哪个镜头还在？它指向我生活里的什么问题？

延伸：[[Taste/假文-夜场电影与情绪余震]]
`,
  "content/Taste/假文-夜场电影与情绪余震.md": `---
title: 夜场电影与情绪余震
description: 散场后的三十分钟更值得写
tags:
  - 主题/品味
  - 品味/电影
---

真正的观感常常发生在散场之后。街上的风、沉默、不想立刻打开手机——那是余震。

把余震写进日记，再提炼一张知识卡片。
`,
  "content/Taste/假文-一碗面里的场景记忆.md": `---
title: 一碗面里的场景记忆
description: 味道是记忆的接口
tags:
  - 主题/品味
  - 品味/美食
---

记住一碗面，往往是因为和谁、在哪、当时在想什么。美食笔记可以很短，但要留下场景。
`,
  "content/Taste/咖啡.md": `---
title: 咖啡
description: 豆子、冲煮与当下感受
tags:
  - 主题/品味
  - 品味/咖啡
---

记录产地、手法与风味，也记录那一口之后的状态。
`,
  "content/Taste/美食.md": `---
title: 美食
description: 味道、场景与人情
tags:
  - 主题/品味
  - 品味/美食
---

不止「好吃」，也写和谁、在哪、为什么记得住。
`,
  "content/Taste/电影.md": `---
title: 电影
description: 叙事、情绪与留下的问题
tags:
  - 主题/品味
  - 品味/电影
---

少写剧透清单，多写最打动你的一点，以及它改变了你对什么问题的看法。
`,
  "content/Journal/index.md": `---
title: 日记
description: 手账岸
tags:
  - 主题/日记
---

- [[Journal/2026-08-13]]
- [[Journal/2026-08-12]]
- [[Journal/2026-08-10]]
`,
  "content/Journal/2026-08-13.md": `---
title: 2026-08-13
type: journal
tags:
  - 日记/每日
---

## 发生了什么

搭好 Erwin 知识花园 Issue 01：全屏封面、杂志专题、物件叙事与统一阅读纸页。

## 感受到什么

当首页与内页共享同一套 Cafe Noir 语言时，站点才像一个人。

## 明天只做一步

写一张从电影余震长出来的知识卡片。
`,
  "content/Journal/2026-08-12.md": `---
title: 2026-08-12
type: journal
tags:
  - 日记/每日
---

## 发生了什么

整理阅读笔记，删掉三条只会收藏、不会复用的摘抄。

## 学到了什么

减少也是一种生长。

## 明天只做一步

只升级一条摘抄为原子笔记。
`,
  "content/Journal/2026-08-10.md": `---
title: 2026-08-10
type: journal
tags:
  - 日记/每日
---

## 发生了什么

读完一章，手冲一杯，晚上看了一部节奏很慢的电影。

## 感受到什么

慢并不等于懒。慢是把注意力放回可感知的事物上。

## 明天只做一步

把电影余震写成一张可链接的卡片。
`,
}

for (const [p, t] of Object.entries(files)) w(p, t)
console.log(`wrote ${Object.keys(files).length} files`)
