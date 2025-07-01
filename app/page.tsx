"use client";

import { useState } from "react";
import quotesJSON from "./quotes.json";
import { quotesArray } from "./quotes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Quote = {
  id: number;
  topic: string;
  text: string;
};

export default function Assignment1() {
  const [topic, setTopic] = useState("");

  const [jsonQuotes, setJsonQuotes] = useState<Quote[]>([]);
  const [arrayQuotes, setArrayQuotes] = useState<Quote[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const jsonFiltered = quotesJSON
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3);

    const arrayFiltered = quotesArray
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3);

    setJsonQuotes(jsonFiltered);
    setArrayQuotes(arrayFiltered);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quote Generator</h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-6">
        <Input
          type="text"
          placeholder="Enter topic (e.g. motivation)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border px-3 py-2 rounded w-64"
        />
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
        >
          Show Quotes
        </Button>
      </form>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-blue-700">
            Quotes from JSON
          </h2>
          {jsonQuotes.length === 0 ? (
            <p className="text-gray-500">No matching quotes.</p>
          ) : (
            <ul className="list-disc pl-5">
              {jsonQuotes.map((q) => (
                <li key={q.id}>{q.text}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mt-6 mb-2 text-green-700">
            Quotes from TypeScript Array
          </h2>
          {arrayQuotes.length === 0 ? (
            <p className="text-gray-500">No matching quotes.</p>
          ) : (
            <ul className="list-disc pl-5">
              {arrayQuotes.map((q) => (
                <li key={q.id}>{q.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
