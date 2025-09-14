# Contributing to Unified Nun Chain

## Core Concept: Proof‑of‑Action, Browser Nodes, Adaptive WASM

Everyday interactions become secure consensus, executed by lightweight browser nodes, with privacy and interoperability built in.

### Vision

- Replace static, resource-heavy consensus with user-powered Proof‑of‑Action: verifiable actions and visits trigger proposer selection and block creation, not PoW/PoS waste or rigid staking.
- Run nodes in the browser: Rust/WASM light nodes auto-load with consent, sign locally, and participate in gossip without installs, minimizing onboarding friction.
- Make the system adaptive: AI-tuned parameters (thresholds, rate limits, proposer difficulty) respond to network conditions and adversarial patterns.
- Build contracts the modern way: deterministic WASM runtime with strict host ABI, gas metering, and safe upgrades for privacy-first, portable apps.

### Design Defenses

- Sybil resistance and abuse controls at the edge: per-device keys, origin binding, proof‑of‑human signals, robust rate limits.
- Proposer randomness: verifiable random function (e.g., schnorrkel/ristretto), domain separated, deterministic test vectors, integrated into headers and fork choice.
- Determinism in WASM: enforce gas, memory limits, minimal host ABI, privacy primitives as native transaction types or verified circuits.

### Anchor

Actions become consensus; lightweight browser nodes finalize privately and interoperate by design, with adaptive parameters that keep the network fast, fair, and secure.

## Alignment

Refer to this section before proposing features, tests, or deployments to ensure alignment with the original vision.

---

*** End Patch
