import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/Router";

const client = new QueryClient({
  defaultOptions: {
    mutations: {},
    queries: {},
  },
});

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <QueryClientProvider client={client}>
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  );
};

export default App;
