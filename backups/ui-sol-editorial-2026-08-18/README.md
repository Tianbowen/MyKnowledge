# UI 备份：Sol Editorial（Erwin）

备份时间：2026-08-18

这是切换到 `@quartz-themes/abate` 之前的整套自定义 UI。

## 包含文件

| 文件 | 作用 |
| --- | --- |
| `quartz.config.yaml` | 主题色、插件、`layout.byPageType` 使用 `reading` 模板等 |
| `quartz/styles/custom.scss` | Sol Editorial 全站样式 |
| `quartz/components/frames/ReadingFrame.tsx` | 阅读纸页 / 首页杂志壳 |
| `quartz/components/frames/index.ts` | 注册 `reading` frame |

## 如何恢复

在仓库根目录执行：

```powershell
Copy-Item "backups\ui-sol-editorial-2026-08-18\quartz.config.yaml" "quartz.config.yaml" -Force
Copy-Item "backups\ui-sol-editorial-2026-08-18\quartz\styles\custom.scss" "quartz\styles\custom.scss" -Force
Copy-Item "backups\ui-sol-editorial-2026-08-18\quartz\components\frames\ReadingFrame.tsx" "quartz\components\frames\ReadingFrame.tsx" -Force
Copy-Item "backups\ui-sol-editorial-2026-08-18\quartz\components\frames\index.ts" "quartz\components\frames\index.ts" -Force
```

然后重新构建：

```powershell
npx quartz build --serve --port 8081
```

恢复后请确认 `quartz.config.yaml` 里 `@quartz-themes/core` 为 `enabled: false`（备份里的状态），以免 abate 与 Sol Editorial 叠在一起。
