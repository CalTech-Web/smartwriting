# Smart Writing

Next.js 16, React 19, TypeScript, Tailwind CSS v4
Deployed on Vercel: https://smartwriting.vercel.app
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/smartwriting/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/smartwriting/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/smartwriting/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/smartwriting/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
