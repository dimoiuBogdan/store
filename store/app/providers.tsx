"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { getQueryClient } from "./get-query-client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </HydrationBoundary>
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}
