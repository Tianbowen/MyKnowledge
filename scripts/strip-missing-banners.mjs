import fs from "fs"
import path from "path"

function walk(d) {
  for (const n of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, n.name)
    if (n.isDirectory()) walk(p)
    else if (n.name.endsWith(".md")) {
      let t = fs.readFileSync(p, "utf8")
      const n2 = t.replace(/^!\[[^\]]*\]\(\/static\/erwin\/[^)]+\)\r?\n\r?\n?/gm, "")
      if (n2 !== t) {
        fs.writeFileSync(p, n2, "utf8")
        console.log("stripped", p)
      }
    }
  }
}

walk("content")
