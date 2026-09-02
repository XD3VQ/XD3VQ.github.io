# Sharan Venkatapathy — Agent-Native Portfolio

A static, open-source portfolio that people can browse normally and AI agents can use through structured WebMCP tools.

**Live site:** https://xd3vq.github.io/

## Why WebMCP fits this project

Portfolios are easy for people to skim but difficult for agents to use reliably: important evidence is spread across prose, technologies may be ambiguous, and an agent can easily invent or overlook relevant experience. This portfolio exposes a small set of read-only tools with structured inputs and grounded outputs.

A visitor can ask their agent to find relevant projects, compare a role or collaboration idea with portfolio evidence, create a draft collaboration brief, or retrieve public contact options. The result is also rendered in the page's shared Agent Lab so the person can verify what the agent found.

## Human + agent experience

- Humans browse the complete portfolio and use the opportunity matcher directly.
- Agents call `get_profile`, `search_projects`, `match_opportunity`, `build_collaboration_brief`, and `get_contact_options`.
- Tool executions update the visible Agent Lab, giving the person and agent shared context.
- Tools are read-only, non-transactional, input-limited, and use only public portfolio data.
- The site remains fully usable in browsers that do not yet support WebMCP.

## Implementation

The site uses plain HTML, CSS, and JavaScript and deploys directly through GitHub Pages. `script.js` feature-detects `document.modelContext` and registers five imperative WebMCP tools with JSON Schema inputs and read-only annotations. No backend, API keys, cookies, accounts, analytics, or private database are used.

## Test WebMCP

1. Open https://xd3vq.github.io/ in ChatGPT's in-app browser, or use a Chrome build with WebMCP testing enabled.
2. Ask the browser agent: “Find Sharan's projects related to Android background work and explain the evidence.”
3. Try: “Compare this opportunity with Sharan's portfolio: a student Android developer role using Kotlin and background tasks.”
4. Confirm that the structured result also appears in the page's **WebMCP Agent Lab**.

For an ordinary browser test, enter an opportunity in the Agent Lab form. This uses the same matching logic as the WebMCP tool.

## Files

- `index.html` — portfolio content and Agent Lab interface
- `styles.css` — responsive visual design
- `script.js` — site interactions, structured portfolio data, and WebMCP tools
- `LICENSE` — MIT open-source license

## Local preview

Open `index.html` directly. WebMCP registration requires a supported secure-context browser; the normal site and manual matcher still work without it.
