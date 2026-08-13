import fs from "fs"

const css = fs.readFileSync("public/index.css", "utf8")
const keys = ["#quartz-body", ".center", ".erwin-reading", ".erwin-hero--full", "data-slug"]
for (const k of keys) {
  let i = 0
  let c = 0
  while ((i = css.indexOf(k, i)) !== -1 && c < 4) {
    console.log("\n---", k, "@", i)
    console.log(css.slice(Math.max(0, i - 60), i + 260))
    i += k.length
    c++
  }
}
