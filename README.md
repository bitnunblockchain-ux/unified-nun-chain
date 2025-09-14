# Unified Nun Chain

## Node Internals: Where Blockchain Lives

### Mempool

- **Location:** `nodes/relay-node/src/main.rs`
- **Function:** Accepts signed ActionTickets/transactions, deduplicates, orders, and shares across peers (if multiple relays). Buffers pending transactions before proposal.

### Consensus (Proof‑of‑Action + VRF)

- **Location:** `nodes/relay-node/src/main.rs`
- **Function:** Scheduler watches ticket flow; when threshold is met, runs VRF to select proposer, builds block from mempool, resolves ties/finalizes after k confirmations.

### Block Execution

- **Location:** `nodes/relay-node/src/main.rs` (WASM runtime section)
- **Function:** Applies transactions/actions to state by invoking contract entrypoints in deterministic WASM VM, writes receipts, updates roots.

### State and Storage

- **Location:** `nodes/relay-node/src/main.rs` (RocksDB usage)
- **Function:** Key–value state, Merkle roots (if included). On commit, block and state deltas are persisted; mempool entries cleaned up post-commit.

### Contracts

- **Location:** `nodes/relay-node/src/main.rs` (WASM module loading/calling)
- **Function:** Deployed as WASM modules; minimal deterministic host ABI. Calls routed via `contract_call`, metered for gas, state isolated per contract.

### Networking

- **Location:** `nodes/relay-node/src/main.rs` (WebSocket server)
- **Function:** Clients connect via WebSocket for RPC/events. Multiple relays gossip transactions/blocks P2P, synchronize heads. Browser nodes sign locally, submit to relay.

---

## Browser Node (Edge)

- **Location:** `nodes/browser-node/src/lib.rs`
- **Function:** Key management, signing, local validation hints, submitting ActionTickets/transactions. Not executor or consensus engine—acts as “light client + signer.”

---

## End-to-End Request Flow

1. User action in browser → browser node signs ActionTicket/Tx
2. Sent over WebSocket → relay validates/enqueues in mempool
3. When threshold/time met, relay runs VRF, proposes block, executes in WASM VM, updates state/roots, emits events
4. Browser/UI receives head updates and receipts

---

## Where to Extend Next

- Shared mempool across relays (`nodes/relay-node/src/main.rs`): add peer protocol for ticket/block propagation.
- Adaptive parameters: tune thresholds/windows/difficulty based on telemetry.
- Contract SDK/ABI docs: specify entrypoints, storage, gas rules for safe WASM contracts.

---

## Mental Model

- **Web app + browser WASM:** Human-facing, privacy-preserving edge.
- **Relay node:** The blockchain proper—mempool, consensus, execution, state, contracts, RPC.

---

## Anchor

Actions become consensus via lightweight browser nodes; contracts run in deterministic WASM; parameters adapt to keep the network fast, fair, private, and interoperable

---
