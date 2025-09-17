import { useState } from "react";
import { API_KEY } from "./Config";

export function useApiRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData(query) {
    setError(null);
    if (query.length < 2) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      if (!res.ok) throw new Error("Request error!");

      const json = await res.json();
      if (json.Response === "False") throw new Error("Movie not found");

      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, data, fetchData };
}
