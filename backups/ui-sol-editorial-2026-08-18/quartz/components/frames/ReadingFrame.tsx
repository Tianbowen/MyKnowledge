import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

type NoteKind = "essay" | "object" | "journal" | "card" | "section"

type ContinueLink = {
  title: string
  href: string
}

const STATUS_LABEL: Record<string, string> = {
  seed: "种子",
  growing: "生长中",
  evergreen: "常青",
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.map((item) => asString(item)).filter(Boolean)
}

function asContinues(value: unknown): ContinueLink[] {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null
      const row = item as Record<string, unknown>
      const title = asString(row.title)
      const href = asString(row.href)
      if (!title || !href) return null
      return { title, href }
    })
    .filter((item): item is ContinueLink => item !== null)
}

function inferKind(slug: string, kindRaw: string, tags: unknown): NoteKind {
  const kind = kindRaw.toLowerCase()
  if (kind === "essay" || kind === "object" || kind === "journal" || kind === "card" || kind === "section") {
    return kind
  }

  if (slug === "index" || slug.endsWith("/index") || slug === "method" || slug === "about") {
    return "section"
  }
  if (slug.startsWith("journal/") || slug.startsWith("Journal/")) return "journal"
  if (slug.includes("物件") || slug.includes("%E7%89%A9%E4%BB%B6")) return "object"

  const tagList = Array.isArray(tags) ? tags.map((t) => String(t)) : []
  if (tagList.some((t) => t === "object" || t.startsWith("object/"))) return "object"
  if (tagList.some((t) => t.includes("evergreen") || t.startsWith("type/"))) return "card"
  if (slug.startsWith("knowledge/") || slug.startsWith("Knowledge/")) return "card"

  return "essay"
}

function buildKicker(issue: string, seat: string): string {
  let issuePart = ""
  if (issue) {
    if (issue.startsWith("第") || issue.includes("期")) issuePart = issue
    else if (issue.startsWith("Issue")) issuePart = issue.replace(/^Issue\s*/i, "第 ").replace(/\s*$/, "") + " 期"
    else issuePart = `第 ${issue} 期`
  }
  if (issuePart && seat) return `${issuePart} · ${seat}`
  return issuePart || seat
}

/**
 * Erwin Sol Editorial shell.
 * Homepage: slim chrome over magazine hero.
 * Inner pages: seat nav + warm reading paper + editorial note chrome.
 */
export const ReadingFrame: PageFrame = {
  name: "reading",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    right,
    footer,
  }: PageFrameProps) {
    const slug = String(componentData.fileData.slug ?? "")
    const isHome = slug === "index"
    const fm = (componentData.fileData.frontmatter ?? {}) as Record<string, unknown>

    const title = asString(fm.title)
    const description = asString(fm.description)
    const seat = asString(fm.seat)
    const issue = asString(fm.issue)
    const status = asString(fm.status).toLowerCase()
    const tended = asString(fm.tended)
    const takeaways = asStringList(fm.takeaways)
    const continues = asContinues(fm.continues)
    const kind = inferKind(slug, asString(fm.kind), fm.tags)
    const showEditorial = !isHome && kind !== "section" && Boolean(title)
    const kicker = buildKicker(issue, seat)
    const statusLabel = STATUS_LABEL[status] ?? ""
    const showEndmatter = showEditorial && (takeaways.length > 0 || continues.length > 0)

    return (
      <>
        <div class={`erwin-shell${isHome ? " erwin-shell--home" : " erwin-shell--page"}`}>
          <div class="erwin-topbar">
            <div class="erwin-topbar-main">
              <Header {...componentData}>
                {header.map((HeaderComponent) => (
                  <HeaderComponent {...componentData} />
                ))}
              </Header>
              {!isHome && (
                <nav class="erwin-seatnav" aria-label="Sections">
                  <a href="/reading/" data-no-popover="true">
                    阅读
                  </a>
                  <a href="/knowledge/" data-no-popover="true">
                    知识
                  </a>
                  <a href="/taste/" data-no-popover="true">
                    品味
                  </a>
                  <a href="/journal/" data-no-popover="true">
                    日记
                  </a>
                  <a href="/maps/知识地图" data-no-popover="true">
                    地图
                  </a>
                  <a href="/method" data-no-popover="true">
                    写作方法
                  </a>
                </nav>
              )}
            </div>
          </div>

          <div class="center erwin-reading">
            {isHome ? (
              <>
                <Content {...componentData} />
                <div class="page-footer erwin-after">
                  {afterBody.map((BodyComponent) => (
                    <BodyComponent {...componentData} />
                  ))}
                </div>
              </>
            ) : (
              <div class={`erwin-paper erwin-kind-${kind}${showEditorial ? " erwin-paper--editorial" : ""}`}>
                {showEditorial && (
                  <header class="erwin-edhead">
                    {kicker && <p class="erwin-edhead-kicker">{kicker}</p>}
                    <h1 class="erwin-edhead-title">{title}</h1>
                    {description && <p class="erwin-edhead-lead">{description}</p>}
                    {(statusLabel || tended) && (
                      <p class="erwin-edhead-meta">
                        {statusLabel && (
                          <span class={`erwin-status erwin-status--${status}`}>{statusLabel}</span>
                        )}
                        {tended && <span class="erwin-tended">上次照料 {tended}</span>}
                      </p>
                    )}
                  </header>
                )}
                <div class="page-header">
                  <div class="popover-hint">
                    {beforeBody.map((BodyComponent) => (
                      <BodyComponent {...componentData} />
                    ))}
                  </div>
                </div>
                <Content {...componentData} />
                {showEndmatter && (
                  <div class="erwin-endmatter">
                    {takeaways.length > 0 && (
                      <section class="erwin-takeaways">
                        <h2 class="erwin-endmatter-title">本篇要点</h2>
                        <ol>
                          {takeaways.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      </section>
                    )}
                    {continues.length > 0 && (
                      <section class="erwin-continues">
                        <h2 class="erwin-endmatter-title">继续读</h2>
                        <ul>
                          {continues.map((item) => (
                            <li key={item.href}>
                              <a href={item.href} data-no-popover="true">
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                )}
                <div class="page-footer erwin-after">
                  {afterBody.map((BodyComponent) => (
                    <BodyComponent {...componentData} />
                  ))}
                </div>
                {right.length > 0 && (
                  <aside class="erwin-meta">
                    {right.map((BodyComponent) => (
                      <BodyComponent {...componentData} />
                    ))}
                  </aside>
                )}
              </div>
            )}
          </div>
        </div>

        <div class="erwin-footerbar">
          {footer.map((FooterComponent) => (
            <FooterComponent {...componentData} />
          ))}
        </div>
      </>
    )
  },
}
