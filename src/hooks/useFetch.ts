import { useEffect, useState } from "react";

type useFetchResponse = (url: string) => [any, boolean, Error | null];

export const useFetch: useFetchResponse = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};
