# ADR 0001: Technology stack

**Status:** proposed — confirm with the team in the sprint 0 stack meeting, then flip to accepted.
**Date:** 2026-09-17

## Context

Three people, one semester, no prior shared codebase. See `CAMPUSHUB_PLAN.md` §8.1 for the
full reasoning. First check whether INFO-5103 mandates a stack — if it does, this ADR just
records that constraint instead of a choice.

## Decision

| Layer | Choice |
|---|---|
| Frontend | React + Vite + TypeScript, Tailwind CSS v4 |
| Backend | Node + Express + TypeScript |
| ORM | Prisma |
| Database | PostgreSQL (Neon or Supabase free tier) |
| Auth | Own JWT + email OTP |
| Email | Resend (fallback: SendGrid) |
| Images | Cloudinary free tier |
| Hosting | Vercel (web) + Render (API) |
| CI | GitHub Actions — typecheck, lint, build, test on every PR |
| Monorepo | npm workspaces (`apps/web`, `apps/api`, `packages/shared`) |

Realtime (Socket.IO) is deliberately deferred to sprint 4, and only if sprints 1–3 land on
schedule.

## Consequences

- Everyone writes TypeScript everywhere; no context-switch between frontend/backend languages.
- `packages/shared` is the single source of truth for API request/response shapes — update it
  before changing an endpoint, not after.
- Prisma migrations are reviewable in PRs, which matters for a team of three with no shared
  codebase history.
- Do not reopen this decision after week 6 (see plan §10).
