import fs from "fs"
import path from "path"

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const files = walk("public")
const objectPage = files.find((f) => f.includes("书脊") && f.endsWith(".html"))
const css = files.find((f) => /index(-[a-f0-9]+)?\.css$/.test(path.basename(f)))

console.log("objectPage", objectPage)
console.log("css", css)

if (objectPage) {
  const html = fs.readFileSync(objectPage, "utf8")
  const bl = html.match(/class="backlinks"[\s\S]*?<\/div>/)
  console.log("backlinks_block:\n", bl ? bl[0] : "NONE")
  console.log("has_Erwin_link", /class="internal">Erwin</.test(html))
}

if (css) {
  const text = fs.readFileSync(css, "utf8")
  console.log("page_max_none", text.includes("data-frame=reading") && text.includes("max-width:none"))
  const i = text.indexOf("data-frame=reading")
  console.log("snippet", text.slice(i, i + 180))
}
