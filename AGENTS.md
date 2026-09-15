# Agent notes

- **Language:** Rust (pure CLI). Crates publish later (crates.io / GH Packages). Not Node-first.
- Org labels: `c/` · `t/` · `i/` · `a/` — see KolektivComputer/.github Docs/Issue Labels.md
- Install story: `cargo install` / GH Releases binaries. Optional `@kolektiv/*` npm wrappers only if we add `npx` later — not the product.
- JS/TS Vite-shaped *scaffolded* projects: Vite+ (`vp`) for commands; on NixOS prefer Nix for Node/tooling (not `vp env`)
- Always spell **Kascade** with the K
- Stack: clap; serde (+ yaml) for Kascade; tokio only if BSP needs it
