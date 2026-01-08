import { useState } from "react";

export function useLastUrls() {
  const [result, setResult] = useState([]);
  const [error, setError] = useState();

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const lastUrls = async () => {
    try {
      const response = await fetch(`${serverUrl}/stats/last`, {
        method: "GET",
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();

      setResult(data);
    } catch (err) {
      setError(err);
    }
  };

  return { lastUrls, result, error };
}
