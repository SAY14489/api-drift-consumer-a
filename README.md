# Notion API multi-site backtest fixture

5 real, unmodified TypeScript files copied from
[`incubateur-ademe/impactco2`](https://github.com/incubateur-ademe/impactco2)
(MIT license), commit `a948fbeb0800d09fd292b307350c6428cde74478` (2026-09-22),
for api-drift's real-world backtest of a **repo-wide** Notion API migration
(`databases` → `data_sources`, 2025-09-03) — see `BACKTEST_SPEC.md` and
`SPEC.md`'s §5 verification log in the api-drift repo.

Real, pre-migration source: all 5 call sites still use the old
`/v1/databases/{id}/query` endpoint and the old `Notion-Version: '2022-06-28'`
header at the copied commit.

Not a runnable app — no build step is exercised, only static parsing.
