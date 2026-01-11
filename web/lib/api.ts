const BASE = "http://backend:8080/api";

export async function getHealth() {
  // Temporary
  return {
    backend: "ok",
    ai: "stub",
    engine: "offline",
  };
}

export async function runAI(input: string) {
  return {
    output: `Stub output for "${input}"`,
    latency_ms: 8,
  };
}