# QA Report - Policy AI (web-a)

Date: 2026-03-06

## Build & Lint

| Check | Status |
|-------|--------|
| `npm run build` | PASS |
| `npm run lint` | PASS |
| TypeScript strict | PASS |

## Issues Found & Fixed

### 1. Missing favicon (Fixed)
- **Severity**: Medium
- **Detail**: No favicon was present in the project
- **Fix**: Added `src/app/icon.svg` with blue "P" on black background

### 2. No custom 404 page (Fixed)
- **Severity**: Medium
- **Detail**: No `not-found.tsx` existed; relied on Next.js default
- **Fix**: Added `src/app/not-found.tsx` with proper styling and link back to top

### 3. No error boundary (Fixed)
- **Severity**: Medium
- **Detail**: No `error.tsx` for runtime error handling
- **Fix**: Added `src/app/error.tsx` with retry button

### 4. Generate page ignoring URL search params (Fixed)
- **Severity**: High
- **Detail**: `/docs/[type]` and `/for/[industry]` pages link to `/generate?type=...` and `/generate?industry=...`, but the generate page never read these params. The `GenerateForm` component accepted `defaultDocType`/`defaultIndustry` props but they were never passed.
- **Fix**: Updated `src/app/generate/page.tsx` to read and validate `searchParams`, passing them to `GenerateForm`

### 5. No input length limits on form (Fixed)
- **Severity**: Medium
- **Detail**: Service name, description, and company name fields had no `maxLength`, allowing extremely long input
- **Fix**: Added `maxLength={100}` for service name and company name, `maxLength={500}` for description

### 6. No server-side input length validation (Fixed)
- **Severity**: Medium
- **Detail**: `/api/generate` accepted arbitrarily long strings, potentially causing expensive API calls
- **Fix**: Added length validation (100/500 chars) before calling Anthropic API

### 7. Feedback API repo parameter injection (Fixed)
- **Severity**: High (Security)
- **Detail**: `/api/feedback` accepted a user-supplied `repo` parameter and interpolated it directly into the GitHub API URL (`/repos/Michey0495/${repo}/issues`). An attacker could manipulate this to create issues in arbitrary repositories.
- **Fix**: Hardcoded `repo = "web-a"` instead of accepting from client. Also added message length limit (2000 chars).

## Checklist

- [x] `npm run build` success
- [x] `npm run lint` no errors
- [x] Responsive design (mobile/desktop) - Tailwind responsive classes used throughout
- [x] Favicon set (icon.svg)
- [x] OGP metadata configured (layout.tsx openGraph/twitter)
- [x] 404 page (not-found.tsx)
- [x] Loading state (streaming indicator in generate form)
- [x] Error state (error.tsx + form error display)
- [x] JSON-LD structured data (homepage)
- [x] robots.txt, llms.txt, agent.json present
- [x] MCP server endpoint functional
- [x] Input validation (client + server)
- [ ] OGP image - Not configured (no og-image file; would need design asset)

## Notes

- The `/generate` page is now dynamic (SSR) instead of static due to reading `searchParams`. This is acceptable as the page contains a client-side form anyway.
- The design system follows CLAUDE.md conventions: black background, white text, blue accent, no emojis/icons.
- All pages use proper semantic HTML with appropriate heading hierarchy.
- Google Analytics integration is conditional on `NEXT_PUBLIC_GA_ID` env var.
