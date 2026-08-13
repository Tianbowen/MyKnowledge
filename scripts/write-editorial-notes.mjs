import fs from "fs"
import path from "path"

const w = (p, t) => {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, t, "utf8")
}

const files = {
  "content/Reading/如何阅读一本书的一章.md": `---
title: 如何阅读一本书的一章
description: 从输入到可复用输出的慢路径
kind: essay
seat: 阅读
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 主题/阅读
  - 期号/01
takeaways:
  - 先扫读结构，再提问，再转写。
  - 高亮不等于理解；用自己的话才算输出。
  - 稳定看法应升级为可链接的知识卡片。
continues:
  - title: 摘抄为什么常常失效
    href: /Reading/摘抄为什么常常失效
  - title: 原子笔记的三个标准
    href: /Knowledge/原子笔记的三个标准
---

![read](/static/erwin/banner-reading.png)

## 窗边流程

1. **扫读**：标出结构，不急着做笔记。
2. **提问**：这一章想说服我什么？
3. **转写**：用自己的话写 5 行。
4. **升级**：若有稳定看法，链到 [[Knowledge/原子笔记的三个标准]]。

阅读不是收藏高亮，而是让未来的自己更快想清楚。
`,

  "content/Reading/摘抄为什么常常失效.md": `---
title: 摘抄为什么常常失效
description: 复制句子很容易，转移理解很难
kind: essay
seat: 阅读
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 主题/阅读
  - 期号/01
takeaways:
  - 摘抄若无问题意识，只会堆存。
  - 先写「它改变了我哪一点」。
  - 能链接，才值得长期保留。
continues:
  - title: 如何阅读一本书的一章
    href: /Reading/如何阅读一本书的一章
  - title: 知识因链接而增值
    href: /Knowledge/知识因链接而增值
---

![read](/static/erwin/banner-reading.png)

摘抄失效，通常不是因为记性差，而是因为**没有经过改写**。

句子仍属于作者；只有当你回答「它让我看见了什么」，它才开始属于你。
`,

  "content/Knowledge/原子笔记的三个标准.md": `---
title: 原子笔记的三个标准
description: 短、可链、用自己的话
kind: card
seat: 知识
issue: "01"
status: evergreen
tended: 2026-08-13
tags:
  - 类型/常青
  - 期号/01
takeaways:
  - 一张卡片只承载一个想法。
  - 至少连向一个已有节点或地图。
  - 用自己的话，而不是摘抄仓库。
continues:
  - title: 知识因链接而增值
    href: /Knowledge/知识因链接而增值
  - title: 如何阅读一本书的一章
    href: /Reading/如何阅读一本书的一章
---

## 标准

1. **短**：一张卡片只承载一个想法。
2. **可链**：至少连向一个已有节点或地图。
3. **自己的话**：不是摘抄仓库。

当你不确定时，先用 Inbox 心态接住，再决定是否升级为卡片。
`,

  "content/Knowledge/知识因链接而增值.md": `---
title: 知识因链接而增值
description: 单点记忆弱，网络记忆强
kind: card
seat: 知识
issue: "01"
status: evergreen
tended: 2026-08-13
tags:
  - 类型/常青
  - 期号/01
takeaways:
  - 价值来自关系，不只来自条目数量。
  - 链接是思考的痕迹，不是目录装饰。
  - 地图帮助你看见缺口。
continues:
  - title: 原子笔记的三个标准
    href: /Knowledge/原子笔记的三个标准
  - title: 知识地图
    href: /Maps/知识地图
---

一条笔记的价值，往往不在它本身有多长，而在它**连向何处**。

链接让未来的你能沿路返回，而不是在文件夹里重新寻找。
`,

  "content/Knowledge/物件-书脊.md": `---
title: 物件·书脊
description: 一排书脊如何成为可漫游的索引
kind: object
seat: 知识
issue: "01"
status: growing
tended: 2026-08-12
tags:
  - 物件
  - 期号/01
takeaways:
  - 书脊是身体尺度的目录。
  - 物件能唤起比标签更强的记忆路径。
continues:
  - title: 知识因链接而增值
    href: /Knowledge/知识因链接而增值
  - title: 如何阅读一本书的一章
    href: /Reading/如何阅读一本书的一章
---

![book](/static/erwin/banner-knowledge.png)

书架上的书脊像一条慢索引：颜色、厚度、磨损都在提示「我曾在哪里停过」。

它提醒我：知识也可以有触感，而不只是数据库字段。
`,

  "content/Growth/每天十五分钟的微循环.md": `---
title: 每天十五分钟的微循环
description: 小而稳定，胜过偶发的猛攻
kind: essay
seat: 成长
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 主题/成长
  - 期号/01
takeaways:
  - 十五分钟足够完成「读—写—链」一次。
  - 连续性比单次深度更改变系统。
  - 结束时留下明天的入口。
continues:
  - title: 把品味算进学习
    href: /Growth/把品味算进学习
  - title: 手冲的三分钟专注
    href: /Taste/手冲的三分钟专注
---

把学习拆成可重复的微循环：打开一页、写下五句、连一条旧笔记。

做完就停。停，是为了明天还能开始。
`,

  "content/Growth/把品味算进学习.md": `---
title: 把品味算进学习
description: 感官经验也能进入知识网络
kind: essay
seat: 成长
issue: "01"
status: growing
tended: 2026-08-12
tags:
  - 主题/成长
  - 主题/品味
  - 期号/01
takeaways:
  - 品味不是娱乐附录，而是注意力训练。
  - 感受写清楚后，才能抽象成卡片。
  - 生活物件常常是最好的入口。
continues:
  - title: 手冲的三分钟专注
    href: /Taste/手冲的三分钟专注
  - title: 物件·咖啡杯
    href: /Taste/物件-咖啡杯
---

学习不必只发生在书桌。一杯咖啡的节奏、一场电影后的余震，都可以成为可复用的理解。

关键是：把感受写成未来还能接上的句子。
`,

  "content/Taste/手冲的三分钟专注.md": `---
title: 手冲的三分钟专注
description: 水温、注水与当下
kind: essay
seat: 品味
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 主题/品味
  - 品味/咖啡
  - 期号/01
takeaways:
  - 三分钟可以是注意力热身。
  - 身体节奏先于写作节奏。
  - 物件能成为进入专注的门。
continues:
  - title: 物件·咖啡杯
    href: /Taste/物件-咖啡杯
  - title: 每天十五分钟的微循环
    href: /Growth/每天十五分钟的微循环
---

![coffee](/static/erwin/banner-taste.png)

手冲要求你同时看见水流与时间。这三分钟里，手机不重要，下一封邮件不重要。

我把它当作注意力的热身：先温杯，再写作。
`,

  "content/Taste/一碗面里的场景记忆.md": `---
title: 一碗面里的场景记忆
description: 味道如何保存地点与关系
kind: essay
seat: 品味
issue: "01"
status: seed
tended: 2026-08-11
tags:
  - 主题/品味
  - 品味/美食
  - 期号/01
takeaways:
  - 味道常常绑定场景，而不只是食材。
  - 写清「和谁、在哪」，记忆才可检索。
continues:
  - title: 把品味算进学习
    href: /Growth/把品味算进学习
  - title: 美食
    href: /Taste/美食
---

面的热气散开时，记忆比味道先到。店里的噪声、对面的人、窗外的雨，一起被保存。

记录食物，其实是在记录你曾怎样在场。
`,

  "content/Taste/夜场电影与情绪余震.md": `---
title: 夜场电影与情绪余震
description: 散场之后，问题才真正开始
kind: essay
seat: 品味
issue: "01"
status: growing
tended: 2026-08-12
tags:
  - 主题/品味
  - 品味/电影
  - 期号/01
takeaways:
  - 余震比剧情摘要更值得留下。
  - 问一句「它改变了我哪一点」。
  - 票根可以成为返回情绪的钥匙。
continues:
  - title: 物件·电影票根
    href: /Taste/物件-电影票根
  - title: 把品味算进学习
    href: /Growth/把品味算进学习
---

![movie](/static/erwin/banner-taste.png)

夜场散场后，街道更空，问题却更清楚。电影结束于字幕，思考开始于走回去的路上。

我更愿意记下余震，而不是完整剧情。
`,

  "content/Taste/物件-咖啡杯.md": `---
title: 物件·咖啡杯
description: 注意力如何被温热唤起
kind: object
seat: 品味
issue: "01"
status: growing
tended: 2026-08-13
tags:
  - 物件
  - 品味/咖啡
  - 期号/01
takeaways:
  - 杯子是节奏边界，不是生产力道具。
  - 触感能比提醒事项更早唤起专注。
continues:
  - title: 手冲的三分钟专注
    href: /Taste/手冲的三分钟专注
  - title: 把品味算进学习
    href: /Growth/把品味算进学习
---

![cup](/static/erwin/banner-taste.png)

杯子的重量提醒身体：现在进入另一段节奏。

它不是生产力道具，而是边界——从刷信息，走到可思考。
`,

  "content/Taste/物件-电影票根.md": `---
title: 物件·电影票根
description: 一张小纸片保存夜色与问题
kind: object
seat: 品味
issue: "01"
status: seed
tended: 2026-08-12
tags:
  - 物件
  - 品味/电影
  - 期号/01
takeaways:
  - 票根是情绪的时间戳。
  - 物件帮助你回到问题，而不只回到片名。
continues:
  - title: 夜场电影与情绪余震
    href: /Taste/夜场电影与情绪余震
  - title: 知识因链接而增值
    href: /Knowledge/知识因链接而增值
---

![ticket](/static/erwin/banner-taste.png)

票根很薄，却能装下一整晚的余震：片名、座位、以及散场后你不愿立刻回答的问题。
`,

  "content/Journal/2026-08-13.md": `---
title: 2026-08-13
description: Issue 01 成形的一天
kind: journal
seat: 日记
issue: "01"
status: seed
tended: 2026-08-13
tags:
  - 日记/每日
takeaways:
  - 首页与内页共享语言，站点才像一个人。
  - 明天从一张电影余震卡片开始。
continues:
  - title: 夜场电影与情绪余震
    href: /Taste/夜场电影与情绪余震
  - title: Method · 后厨
    href: /Method
---

## 发生了什么

搭好 Erwin 知识花园 Issue 01：全屏封面、杂志专题、物件叙事与统一阅读纸页。

## 感受到什么

当首页与内页共享同一套温暖编辑语言时，站点才像一个人。

## 明天只做一步

写一张从电影余震长出来的知识卡片。
`,

  "content/Journal/2026-08-12.md": `---
title: 2026-08-12
description: 把栏目当成座位，而不是文件夹
kind: journal
seat: 日记
issue: "01"
status: seed
tended: 2026-08-12
tags:
  - 日记/每日
takeaways:
  - 导航用场景命名，记忆更稳。
continues:
  - title: 知识地图
    href: /Maps/知识地图
---

## 发生了什么

调整信息架构：阅读、知识、品味、日记像座位，而不是目录树。

## 感受到什么

命名一变，写作姿态也变松了。

## 明天只做一步

给三篇样例补上生长状态。
`,

  "content/Journal/2026-08-10.md": `---
title: 2026-08-10
description: 先允许未完成
kind: journal
seat: 日记
issue: "01"
status: seed
tended: 2026-08-10
tags:
  - 日记/每日
takeaways:
  - Inbox 心态保护早期想法不被过早分类。
continues:
  - title: Method · 后厨
    href: /Method
---

## 发生了什么

重新确认：Inbox / PARA / Zettelkasten / Journal 是透镜，不是文件夹名。

## 感受到什么

少了一点整理焦虑，多了一点继续写的勇气。

## 明天只做一步

把一条灵感转成五句自己的话。
`,

  "content/templates/知识卡片.md": `---
title: "{{title}}"
description: 
kind: card
seat: 知识
issue: "01"
status: seed
tended: {{date}}
tags: []
takeaways:
  - 
continues:
  - title: 
    href: 
---

## 用自己的话

## 此刻如何看待它（可选透镜）
<!-- Inbox: 仍未消化 | PARA: project/area/resource/archive | Zettel: 可长期复用 | Journal: 偏个人经验 -->

## 链接

- [[]]
`,

  "content/templates/日记.md": `---
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
continues:
  - title: 
    href: 
---

## 发生了什么

## 感受到什么 / 学到了什么

## 明天只做一步
`,

  "content/templates/品味记录.md": `---
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
continues:
  - title: 
    href: 
---

## 对象

## 感受

## 若抽象成知识，可链向

- [[]]
`,

  "content/templates/长文.md": `---
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
  - 
continues:
  - title: 
    href: 
  - title: 
    href: 
---

## 正文

`,

  "content/templates/物件.md": `---
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
continues:
  - title: 
    href: 
---

![object](/static/erwin/banner-taste.png)

## 看见什么

## 它如何把门打开
`,
}

// Mark section hubs so they skip editorial chrome
const sectionFiles = [
  "content/Knowledge/index.md",
  "content/Reading/index.md",
  "content/Growth/index.md",
  "content/Taste/index.md",
  "content/Journal/index.md",
  "content/About.md",
  "content/Method.md",
  "content/Maps/知识地图.md",
  "content/Taste/咖啡.md",
  "content/Taste/美食.md",
  "content/Taste/电影.md",
]

for (const [filePath, body] of Object.entries(files)) {
  w(filePath, body)
  console.log("wrote", filePath)
}

for (const filePath of sectionFiles) {
  if (!fs.existsSync(filePath)) continue
  let text = fs.readFileSync(filePath, "utf8")
  if (!text.startsWith("---")) continue
  if (/^kind:\s*/m.test(text)) {
    text = text.replace(/^kind:\s*.*$/m, "kind: section")
  } else {
    text = text.replace(/^---\n/, "---\nkind: section\n")
  }
  fs.writeFileSync(filePath, text, "utf8")
  console.log("section", filePath)
}

console.log("done", Object.keys(files).length, "notes + templates")
