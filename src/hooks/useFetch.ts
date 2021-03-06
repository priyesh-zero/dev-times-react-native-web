import { useEffect, useState, useRef } from "react";
import { api } from "../constants/index";

type useFetchResponse = <Response>(
  url: string
) => [Response | null, boolean, Error | null];

export const useFetch: useFetchResponse = (url) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: { "X-Api-Key": api.token },
    })
      .then((data) => data.json())
      .then((response) => {
        setData(
          !!data
            ? {
                ...response,
                articles: [...data.articles, ...response.articles],
              }
            : response
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

interface urlList {
  [key: string]: string;
}

interface urlErrorList {
  [key: string]: Error | null;
}

interface urlDataList<Response> {
  [key: string]: Response;
}

type useFetchAllResponse = <Response>(
  urls: urlList
) => [null | urlDataList<Response>, boolean, urlErrorList];

const createObject = <IDefaultValue>(
  urlList: urlList,
  defaultValue: IDefaultValue
) => {
  const state = {};
  for (const key of Object.keys(urlList)) {
    state[key] = defaultValue;
  }
  return state;
};

export const useFetchAll: useFetchAllResponse = <T>(urls: urlList) => {
  const [data, setData] = useState<urlDataList<T> | null>(null);
  const [staging, setStaging] = useState(createObject<T | null>(urls, null));
  const [error, setError] = useState(createObject<Error | null>(urls, null));
  const [loading, setLoading] = useState(createObject<boolean>(urls, false));
  const urlsRef = useRef(createObject<string | null>(urls, null));

  useEffect(() => {
    Object.entries<string>(urls).map(([key, url]) => {
      if (urlsRef.current[key] !== url) {
        urlsRef.current[key] = url;
        setLoading((state) => ({ ...state, [key]: true }));
        fetch(url, {
          headers: { "X-Api-Key": api.token },
        })
          .then((data) => data.json())
          .then((response) => {
            setStaging((state) => {
              return {
                ...state,
                [key]: {
                  ...response,
                  articles: !!data
                    ? [...(data as any)![key].articles, ...response.articles]
                    : response.articles,
                },
              };
            });
            setLoading((state) => ({ ...state, [key]: false }));
          })
          .catch((err) => {
            setError((state) => ({ ...state, [key]: err }));
            setLoading((state) => ({ ...state, [key]: false }));
          });
      }
    });
  }, [urls]);

  useEffect(() => {
    if (Object.values(loading).every((l) => !l)) {
      setData(staging);
    }
  }, [loading]);

  return [data, Object.values(loading).some((l) => l), error];
};
