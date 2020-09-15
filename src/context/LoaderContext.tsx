import React, { createContext, FC, useState } from "react";

export const LoaderContext = createContext({
  isLoading: false,
  toggleLoading: (_state: boolean) => {},
});

export const LoaderProvider: FC<{}> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const toggleLoading = (state: boolean) => setLoading(state);
  return (
    <LoaderContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
