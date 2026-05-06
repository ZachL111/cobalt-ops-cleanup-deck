# cobalt-ops-cleanup-deck

`cobalt-ops-cleanup-deck` is a compact JavaScript repository for automation, centered on this goal: Develop a JavaScript command-oriented project for cleanup scenarios with negative fixtures, human-readable error snapshots, and local-only command execution.

## Use Case

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Cobalt Ops Cleanup Deck Review Notes

Start with `idempotence` and `operator cost`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## Highlights

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/cobalt-ops-cleanup-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `idempotence` and `operator cost`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
