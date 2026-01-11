"use client";

import { useState } from "react";
import { runAI } from "@/lib/api";

export default function Playground() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function handleRun() {
    const res = await runAI(input);
    setOutput(res.output);
  }

  return (
    <div className="max-w-2xl space-y-4">
      <textarea
        className="w-full rounded border border-slate-800 bg-slate-900 p-3"
        rows={4}
        placeholder="Enter prompt…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleRun}
        className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-500"
      >
        Run AI
      </button>

      {output && (
        <pre className="rounded border border-slate-800 bg-slate-900 p-4">
          {output}
        </pre>
      )}
    </div>
  );
}