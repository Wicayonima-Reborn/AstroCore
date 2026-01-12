const BASE_URL = "http://backend:8080/api";

export type HealthStatus = {
  backend: string;
  ai: string;
  engine: string;
};

export async function getHealth(): Promise<HealthStatus> {
  const res = await fetch(`${BASE_URL}/health`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch health status");
  }

  return res.json();
}

export type AIResult = {
  output: string;
  latency_ms: number;
};

export async function runAI(input: string): Promise<AIResult> {
  const res = await fetch(`${BASE_URL}/ai/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  return res.json();
}