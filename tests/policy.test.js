import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 91,
    "capacity": 77,
    "latency": 12,
    "risk": 16,
    "weight": 5,
    "score": 133,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 77,
    "capacity": 78,
    "latency": 14,
    "risk": 6,
    "weight": 12,
    "score": 186,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 70,
    "capacity": 93,
    "latency": 10,
    "risk": 6,
    "weight": 4,
    "score": 179,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
