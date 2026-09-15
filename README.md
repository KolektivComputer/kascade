# Kascade

Polyglot monorepo runner. Ingest BSP from any build server, compose the graph, re-export one workspace to the IDE. Adapters fill gaps where BSP isn’t there yet.

**Package:** `@kolektiv/kascade` · **CLI:** `kascade run` / `kascade graph`

Always spell **Kascade** (with the K) — not Cascade.

Kascade is a workspace probe + orchestration layer: **BSP client** to Gradle BSP / Mill / Bazel-BSP / cargo-bsp / …, native adapters for pnpm/Vite+ and wrangler (and other gaps), cross-tool pipelines, and a **unified BSP egress** so IntelliJ and VS Code see modules and tasks together. It composes with Gradle’s own IDE import — it does not replace the Kotlin plugin.

Companion scaffold: [Katalog](https://github.com/KolektivComputer/katalog).
