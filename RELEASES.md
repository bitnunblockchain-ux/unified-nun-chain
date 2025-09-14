# UnifiedNun Releases & Versioning

## Semantic Versioning

- Runtime, ABI, SDK, and protocol use semver (e.g., v1.2.3)
- Each release documents upgrade notes, migration scripts, and rollback steps

## Release Checklist

- API/ABI freeze window
- Runtime determinism conformance tests
- Backward compatibility checks
- Migration/rollback scripts
- Vulnerability disclosure and pen-test guidance

## Upgrade Notes

- Document breaking changes, new features, and migration steps
- Provide scripts for state migration and rollback

## Rollback Steps

- Restore previous state root and contract versions
- Revert adaptive parameter changes
- Re-run conformance and golden tests

## Example

```markdown
## v1.2.0
- Added multi-relay peer protocol
- Hardened edge validation and runtime determinism
- Migration: run block-replay-conformance and contract-golden-test
- Rollback: restore state root, revert contracts, reset adaptive params
