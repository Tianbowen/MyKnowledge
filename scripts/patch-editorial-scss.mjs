import fs from "fs"

const path = "quartz/styles/custom.scss"
let s = fs.readFileSync(path, "utf8")
const marker = "// Section landing (popular: Substack/Ghost channel + postcard grid)"

const insert = `// ---- Editorial note chrome (header / endmatter / kinds) ----
.erwin-edhead {
  margin: 0 0 0.35rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--erwin-line);
}

.erwin-edhead-kicker {
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--erwin-accent);
  font-weight: 600;
}

.erwin-edhead-title {
  margin: 0;
  color: var(--erwin-ink);
  font-size: clamp(1.85rem, 3.8vw, 2.55rem);
  letter-spacing: -0.02em;
  line-height: 1.12;
}

.erwin-edhead-lead {
  margin: 0.7rem 0 0;
  max-width: 38ch;
  color: var(--erwin-ink-soft);
  font-size: 1.05rem;
  line-height: 1.65;
}

.erwin-edhead-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0.9rem;
  align-items: center;
  margin: 0.85rem 0 0;
  font-size: 0.86rem;
  color: var(--erwin-ink-soft);
}

.erwin-status {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--erwin-ink);

  &::before {
    content: "";
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--erwin-accent-soft);
  }

  &--seed::before {
    background: #c4a484;
  }

  &--growing::before {
    background: var(--erwin-accent);
  }

  &--evergreen::before {
    background: #2f6f4e;
  }
}

.erwin-tended {
  opacity: 0.9;
}

.erwin-endmatter {
  margin: 1.75rem 0 0.5rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--erwin-line);
  display: grid;
  gap: 1.15rem;
}

.erwin-endmatter-title {
  margin: 0 0 0.45rem;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--erwin-accent);
}

.erwin-takeaways ol,
.erwin-continues ul {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--erwin-ink-soft);
  line-height: 1.7;
}

.erwin-takeaways li + li,
.erwin-continues li + li {
  margin-top: 0.25rem;
}

.erwin-continues a {
  color: var(--erwin-accent-soft);
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--erwin-accent) 35%, transparent);

  &:hover {
    color: var(--erwin-accent);
  }
}

// Kind: long-form essay
.erwin-kind-essay {
  .erwin-edhead-title {
    font-size: clamp(1.95rem, 4vw, 2.7rem);
  }

  article {
    font-size: 1.06rem;
  }

  article p:first-child:has(> img:only-child) > img {
    max-height: 11rem;
  }
}

// Kind: object narrative
.erwin-kind-object {
  .erwin-edhead {
    border-bottom-style: dashed;
  }

  article p:first-child:has(> img:only-child) > img,
  article > p:first-of-type img {
    max-height: 16rem;
    object-position: center 45%;
  }

  article > p:first-of-type {
    font-size: 1.12rem;
    color: var(--erwin-ink);
  }
}

// Kind: journal
.erwin-kind-journal {
  .erwin-edhead-title {
    font-size: clamp(1.55rem, 3vw, 2rem);
    font-variant-numeric: tabular-nums;
  }

  .erwin-edhead-lead {
    max-width: 46ch;
    font-size: 0.98rem;
  }

  article p > img,
  article img {
    max-height: 7rem;
    opacity: 0.92;
  }
}

// Kind: atomic card
.erwin-kind-card {
  .erwin-edhead-title {
    font-size: clamp(1.45rem, 2.8vw, 1.9rem);
  }

  .erwin-edhead-lead {
    font-size: 0.98rem;
  }

  article {
    font-size: 1rem;
    line-height: 1.75;
  }

  article p > img,
  article img {
    display: none;
  }
}

`

if (!s.includes(marker)) {
  console.error("marker not found")
  process.exit(1)
}

if (s.includes(".erwin-edhead {")) {
  console.log("already inserted")
} else {
  s = s.replace(marker, insert + marker)
  fs.writeFileSync(path, s, "utf8")
  console.log("inserted ok")
}
