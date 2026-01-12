# deps
FROM oven/bun:1.3.5 AS deps
WORKDIR /app
COPY package.json ./
RUN bun install

# build
FROM oven/bun:1.3.5 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_PRIVATE_DISABLE_ASYNC_CONTEXT=1
RUN bunx --bun next build

# runtime
FROM oven/bun:1.3.5-slim
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["bun", "run", "start"]