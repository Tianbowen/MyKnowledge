import fs from "fs"
import path from "path"

const w = (p, t) => {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, t, "utf8")
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
<a class="erwin-btn erwin-btn--ghost" href="./method" data-no-popover="true">后厨·方法</a>
</div>
</div>
<a class="erwin-scroll" href="#magazine" data-no-popover="true">继续阅读本季专题</a>
</div>

<section id="magazine" class="erwin-mag">
<div class="erwin-mag-intro">
<p class="erwin-kicker">本期专题</p>
<h2 class="erwin-mag-title">本季专题</h2>
<p class="erwin-mag-lead">像翻开一本薄杂志：一边是正在生长的知识，一边是生活里的味道与影像。</p>
</div>
<div class="erwin-mag-spread">
<a class="erwin-feature erwin-feature--lead" href="./knowledge/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--garden" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">封面故事</span><span class="erwin-feature-title">知识</span><span class="erwin-feature-desc">概念与方法，慢慢长成可复用的网络。</span></span></a>
<div class="erwin-feature-stack">
<a class="erwin-feature" href="./reading/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--read" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">窗边</span><span class="erwin-feature-title">阅读</span><span class="erwin-feature-desc">书与文章的消化，而不是收藏。</span></span></a>
<a class="erwin-feature" href="./growth/" data-no-popover="true"><span class="erwin-feature-media erwin-feature-media--grow" aria-hidden="true"></span><span class="erwin-feature-body"><span class="erwin-feature-label">成长</span><span class="erwin-feature-title">成长</span><span class="erwin-feature-desc">习惯、能力与下一小步。</span></span></a>
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

<section class="erwin-objects">
<p class="erwin-kicker">本季物件 · 一物一文</p>
<h2 class="erwin-mag-title">本季物件</h2>
<div class="erwin-objects-grid">
<a class="erwin-object" href="./taste/物件-咖啡杯" data-no-popover="true"><span class="erwin-object-media erwin-object-media--cup"></span><span><strong>咖啡杯</strong><em>注意力如何被温热唤起</em></span></a>
<a class="erwin-object" href="./taste/物件-电影票根" data-no-popover="true"><span class="erwin-object-media erwin-object-media--ticket"></span><span><strong>电影票根</strong><em>叙事留下的未解之问</em></span></a>
<a class="erwin-object" href="./knowledge/物件-书脊" data-no-popover="true"><span class="erwin-object-media erwin-object-media--book"></span><span><strong>书脊</strong><em>一厘米厚度里的世界</em></span></a>
</div>
</section>

<section class="erwin-strip">
<div class="erwin-strip-quote">
<p>少追求完美系统，多完成一次诚实的思考。</p>
<span>第 01 期 · 春末创刊</span>
</div>
<div class="erwin-strip-links">
<a href="./method" data-no-popover="true">方法 · 后厨思想</a>
<a href="./about" data-no-popover="true">About · 工作室背面</a>
<a href="./reading/假文-如何阅读一本书的一章" data-no-popover="true">样例长文 · 阅读</a>
</div>
</section>
`,
)

w(
  "content/Maps/知识地图.md",
  `---
title: 知识地图
description: 漫游 Erwin 的主题岛屿
tags:
  - 地图
  - 期号/01
---

<div class="erwin-map">
<p class="erwin-kicker">地图 · 漫游</p>
<h1 class="erwin-map-title">知识地图</h1>
<p class="erwin-map-lead">不按文件夹走路，而按岛屿漫游。Inbox / PARA / Zettelkasten / Journal 是思想透镜，见 <a href="../method" data-no-popover="true">Method</a>。</p>
<div class="erwin-map-grid">
<a class="erwin-island erwin-island--knowledge" href="../knowledge/" data-no-popover="true"><span>知识岛</span><em>概念与可复用领悟</em></a>
<a class="erwin-island erwin-island--reading" href="../reading/" data-no-popover="true"><span>阅读湾</span><em>窗边消化输入</em></a>
<a class="erwin-island erwin-island--growth" href="../growth/" data-no-popover="true"><span>成长径</span><em>长期维护的能力</em></a>
<a class="erwin-island erwin-island--taste" href="../taste/" data-no-popover="true"><span>品味湾</span><em>咖啡·美食·电影</em></a>
<a class="erwin-island erwin-island--journal" href="../journal/" data-no-popover="true"><span>手账岸</span><em>经历与下一步</em></a>
<a class="erwin-island erwin-island--studio" href="../method" data-no-popover="true"><span>后厨</span><em>方法与工作室</em></a>
</div>
</div>
`,
)

console.log("ok", fs.readFileSync("content/index.md", "utf8").includes("本季专题"))
