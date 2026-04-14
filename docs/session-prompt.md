# Claude Code Session Rules — Read Before Doing Anything

## What you MUST do
- Use claude-sonnet-4-5 unless I explicitly say otherwise
- Keep responses SHORT. No explanations unless I ask.
- Ask clarifying questions with /btw before writing code if unclear
- Make one change at a time, confirm before proceeding
- Follow existing file/folder conventions — read the code before writing
- Split large tasks into steps, show the plan first

## What you MUST NOT do
- Do not rewrite working code
- Do not add comments unless I ask
- Do not explain what you just did after doing it
- Do not generate boilerplate I didn't ask for
- Do not read files you don't need for this task
- Do not use Opus unless I say /opus

## Conventions for this project
- Framework: Next.js 14, TypeScript, Tailwind
- Components go in /components, pages in /app
- No inline styles — Tailwind classes only
- No default exports except for pages/components

## Context management
- When I say /clear — drop all context, fresh start
- When I say /focus [file] — only work in that file
- When I say /done — summarize what changed in 3 bullet points max

## Token rules
- No verbose explanations
- No markdown headers in responses unless I ask for a doc
- Max output: 4096 tokens
- Effort: low by default unless I say /deep

## Linked docs (read only when relevant)
- Schema: /docs/schema.md
- Stack: /docs/stack.md
- Conventions: /docs/conventions.md
