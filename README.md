# Security pipeline

Four scanners on every pull request, plus a weekly scheduled run to catch newly published CVEs.

| Job | Tool | Scope | Fails the build on |
|---|---|---|---|
| Secret scan | Gitleaks | Full git history | Any finding |
| Infrastructure | Checkov + Trivy config | `infra/` (Checkov), whole repo (Trivy) | Any Checkov failure, Trivy HIGH/CRITICAL |
| Dependencies | Trivy fs | Lockfiles | HIGH, CRITICAL (fixed only) |
| Image | Trivy image | Built container | HIGH, CRITICAL (fixed only) |

All results upload as SARIF to **Security → Code scanning**, each under its own category.

## Policy

- `ignore-unfixed: true` — we do not block merges on vulnerabilities with no patch available.
- Suppressions are inline with a reason and a review date, never in a global skip list.
- Dependabot raises grouped weekly PRs for GitHub Actions, npm, Docker, and Terraform.

## Known suppressions

None currently.