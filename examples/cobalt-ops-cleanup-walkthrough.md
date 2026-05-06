# Cobalt Ops Cleanup Deck Walkthrough

I use this file as a small checklist before changing the JavaScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 157 | ship |
| stress | rename risk | 165 | ship |
| edge | operator cost | 156 | ship |
| recovery | idempotence | 226 | ship |
| stale | dry-run spread | 165 | ship |

Start with `recovery` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.
