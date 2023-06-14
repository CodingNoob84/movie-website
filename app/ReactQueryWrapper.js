"use client";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
//import { PageTransition } from "next-page-transitions";
import React from "react";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryWrapper({ children, dehydratedState }) {
  //const queryClient = new QueryClient();
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <Hydrate state={dehydratedState}>{children}</Hydrate> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default ReactQueryWrapper;
