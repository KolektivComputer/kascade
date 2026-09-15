# Kascade

Polyglot monorepo runner. Ingest BSP from any build server, compose the graph, re-export one workspace to the IDE. Adapters fill gaps where BSP isn’t there yet.

**Rust CLI** · crate `kascade` · binary `kascade` (`kascade run` / `kascade graph`)

Always spell **Kascade** (with the K) — not Cascade.

Install via Cargo or GitHub Releases (preferred). Optional thin npm wrappers are not the product story.

Kascade is a workspace probe + orchestration layer: **BSP client** to Gradle BSP / Mill / Bazel-BSP / cargo-bsp / …, native adapters for pnpm/Vite+ and wrangler (and other gaps), cross-tool pipelines, and a **unified BSP egress** so IntelliJ and VS Code see modules and tasks together. It composes with Gradle’s own IDE import — it does not replace the Kotlin plugin.

Stack direction: **clap** · **serde** for `kascade.yml` / graph · **tokio** only if BSP JSON-RPC needs it · prefer existing BSP Rust clients/servers before rolling our own wire layer.

Companion scaffold: [Katalog](https://github.com/KolektivComputer/katalog).
