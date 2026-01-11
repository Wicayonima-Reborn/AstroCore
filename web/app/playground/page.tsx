"use client";

import { useState } from "react";
import { runAI } from "@/lib/api";

export default function Playground() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function run() {
    const res = await runAI(input);
    setOutput(res.output);
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <textarea
        className="w-full p-3 bg-slate-900 rounded border border-slate-800"
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={run}
        className="px-4 py-2 bg-blue-600 rounded"
      >
        Run AI
      </button>
      {output && (
        <pre className="bg-slate-900 p-4 rounded border border-slate-800">
          {output}
        </pre>
      )}
    </div>
  );
}