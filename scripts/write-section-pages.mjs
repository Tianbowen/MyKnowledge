import fs from "fs"

const pages = {
  "content/Reading/index.md": `---
title: 阅读
description: 窗边消化输入 · 从高亮到可复用
tags:
  - 主题/阅读
---

![阅读](/static/erwin/banner-reading.png)

<div class="erwin-section-head">
<p class="erwin-kicker">窗边 · 阅读</p>
<p class="erwin-section-lead">这里不是书单仓库，而是把输入慢慢转成自己的话。像 Substack 的阅读专栏：先有温度，再有结构。</p>
</div>

<div class="erwin-postcards">
<a class="erwin-postcard" href="./如何阅读一本书的一章" data-no-popover="true"><span class="erwin-postcard-kicker">长文</span><strong>如何阅读一本书的一章</strong><em>扫读 · 提问 · 转写 · 升级</em></a>
<a class="erwin-postcard" href="./摘抄为什么常常失效" data-no-popover="true"><span class="erwin-postcard-kicker">笔记</span><strong>摘抄为什么常常失效</strong><em>从保存走到链接</em></a>
</div>
`,
  "content/Knowledge/index.md": `---
title: 知识
description: 概念与可复用的领悟
tags:
  - 主题/知识
---

![知识](/static/erwin/banner-knowledge.png)

<div class="erwin-section-head">
<p class="erwin-kicker">书架 · 知识</p>
<p class="erwin-section-lead">一张卡片一个想法。风格接近数字花园与长文专栏的交界：可漫游，也可深读。</p>
</div>

<div class="erwin-postcards">
<a class="erwin-postcard" href="./知识因链接而增值" data-no-popover="true"><span class="erwin-postcard-kicker">常青</span><strong>知识因链接而增值</strong><em>孤立是收藏，联结才是思考</em></a>
<a class="erwin-postcard" href="./原子笔记的三个标准" data-no-popover="true"><span class="erwin-postcard-kicker">常青</span><strong>原子笔记的三个标准</strong><em>短 · 可链 · 自己的话</em></a>
<a class="erwin-postcard" href="./物件-书脊" data-no-popover="true"><span class="erwin-postcard-kicker">物件</span><strong>物件·书脊</strong><em>一厘米厚度里的世界</em></a>
</div>
`,
  "content/Taste/index.md": `---
title: 品味
description: 咖啡 · 美食 · 电影
tags:
  - 主题/品味
---

![品味](/static/erwin/banner-taste.png)

<div class="erwin-section-head">
<p class="erwin-kicker">吧台 · 品味</p>
<p class="erwin-section-lead">感官也值得认真记录。像生活方式杂志的专栏页：一杯咖啡、一张票根，都能链回学习。</p>
</div>

<div class="erwin-postcards">
<a class="erwin-postcard" href="./手冲的三分钟专注" data-no-popover="true"><span class="erwin-postcard-kicker">咖啡</span><strong>手冲的三分钟专注</strong><em>注意力的热身</em></a>
<a class="erwin-postcard" href="./夜场电影与情绪余震" data-no-popover="true"><span class="erwin-postcard-kicker">电影</span><strong>夜场电影与情绪余震</strong><em>散场后的三十分钟</em></a>
<a class="erwin-postcard" href="./一碗面里的场景记忆" data-no-popover="true"><span class="erwin-postcard-kicker">美食</span><strong>一碗面里的场景记忆</strong><em>味道是记忆接口</em></a>
<a class="erwin-postcard" href="./物件-咖啡杯" data-no-popover="true"><span class="erwin-postcard-kicker">物件</span><strong>物件·咖啡杯</strong><em>温热唤起专注</em></a>
<a class="erwin-postcard" href="./物件-电影票根" data-no-popover="true"><span class="erwin-postcard-kicker">物件</span><strong>物件·电影票根</strong><em>叙事留下的问题</em></a>
</div>
`,
  "content/Growth/index.md": `---
title: 成长
description: 长期维护的能力与习惯
tags:
  - 主题/成长
---

<div class="erwin-section-head">
<p class="erwin-kicker">小径 · 成长</p>
<p class="erwin-section-lead">把学习落成下一步。少一点完美系统，多一点可完成的微循环。</p>
</div>

<div class="erwin-postcards">
<a class="erwin-postcard" href="./每天十五分钟的微循环" data-no-popover="true"><span class="erwin-postcard-kicker">练习</span><strong>每天十五分钟的微循环</strong><em>捕获 · 链接 · 行动 · 复盘</em></a>
<a class="erwin-postcard" href="./把品味算进学习" data-no-popover="true"><span class="erwin-postcard-kicker">心态</span><strong>把品味算进学习</strong><em>感官也是训练</em></a>
</div>
`,
}

for (const [p, t] of Object.entries(pages)) {
  fs.writeFileSync(p, t, "utf8")
  console.log("wrote", p)
}
