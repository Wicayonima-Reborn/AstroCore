const BASE_URL = "http://backend:8080/api";

export type HealthStatus = {
  backend: string;
  ai: string;
  engine: string;
};

export async function getHealth(): Promise<HealthStatus> {
  return {
    backend: "ok",
    ai: "stub",
    engine: "offline",
  };
}

export type AIResult = {
  output: string;
  latency_ms: number;
};

export async function runAI(input: string): Promise<AIResult> {
  return {
    output: `Stub response for: ${input}`,
    latency_ms: 8,
  };
}