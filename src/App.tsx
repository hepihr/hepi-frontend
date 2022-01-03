import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import ApplicationsRouter from "./app/Router";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <ApplicationsRouter />
        </BrowserRouter>
      </HelmetProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
