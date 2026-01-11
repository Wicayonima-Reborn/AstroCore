# build stage
FROM rust:1.77-slim AS builder

WORKDIR /app

# copy workspace files
COPY Cargo.toml Cargo.lock ./
COPY backend/astracore-backend ./backend/astracore-backend

# build
RUN cargo build --release -p astracore-backend

# runtime stage
FROM debian:bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/astracore-backend /usr/local/bin/astracore-backend

EXPOSE 8080

CMD ["astracore-backend"]