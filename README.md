# Kascade

Polyglot monorepo runner. Probe Gradle, pnpm/Vite+, wrangler (Cargo later); orchestrate; speak BSP so IDEs see modules and tasks like Gradle.

**Package:** `@kolektiv/kascade` · **CLI:** `kascade run` / `kascade graph`

Always spell **Kascade** (with the K) — not Cascade.

Kascade is a workspace probe + orchestration layer: discover modules/tasks from real tools, define cross-tool pipelines, and expose the graph to IDEs via Build Server Protocol (plus thin IntelliJ/VS Code chrome). It composes with Gradle's own IDE import — it does not replace the Kotlin plugin.

Companion scaffold: [Katalog](https://github.com/KolektivComputer/katalog).
