import { useState } from "react";

export function useUrlShorter(text) {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const shorterUrl = async () => {
    if (!text) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${serverUrl}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ originalUrl: text }),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      setResult(data.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { shorterUrl, loading, error, result };
}
