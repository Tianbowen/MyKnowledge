import fs from "fs"
import path from "path"

const renames = [
  ["content/Knowledge/假文-知识因链接而增值.md", "content/Knowledge/知识因链接而增值.md"],
  ["content/Knowledge/假文-原子笔记的三个标准.md", "content/Knowledge/原子笔记的三个标准.md"],
  ["content/Reading/假文-如何阅读一本书的一章.md", "content/Reading/如何阅读一本书的一章.md"],
  ["content/Reading/假文-摘抄为什么常常失效.md", "content/Reading/摘抄为什么常常失效.md"],
  ["content/Growth/假文-每天十五分钟的微循环.md", "content/Growth/每天十五分钟的微循环.md"],
  ["content/Growth/假文-把品味算进学习.md", "content/Growth/把品味算进学习.md"],
  ["content/Taste/假文-手冲的三分钟专注.md", "content/Taste/手冲的三分钟专注.md"],
  ["content/Taste/假文-夜场电影与情绪余震.md", "content/Taste/夜场电影与情绪余震.md"],
  ["content/Taste/假文-一碗面里的场景记忆.md", "content/Taste/一碗面里的场景记忆.md"],
]

for (const [from, to] of renames) {
  if (fs.existsSync(from)) {
    if (fs.existsSync(to)) fs.unlinkSync(to)
    fs.renameSync(from, to)
    console.log("renamed", path.basename(from), "->", path.basename(to))
  }
}

const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) walk(p)
    else if (name.endsWith(".md")) {
      let t = fs.readFileSync(p, "utf8")
      const next = t.replaceAll("假文-", "")
      if (next !== t) {
        fs.writeFileSync(p, next, "utf8")
        console.log("relinked", p)
      }
    }
  }
}
walk("content")
console.log("done")
