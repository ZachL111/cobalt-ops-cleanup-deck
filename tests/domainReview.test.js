import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 78, slack: 35, drag: 29, confidence: 53 };
assert.equal(domainReviewScore(item), 157);
assert.equal(domainReviewLane(item), "ship");
