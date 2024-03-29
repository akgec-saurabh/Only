"use client";
import { queryClient } from "@/lib/query";
import { ActiveColorContextProvider } from "@/store/activeColor-context";
import { AuthContextProvider } from "@/store/auth-context";
import { CartContextProvider } from "@/store/cart-context";
import { FilterContextProvider } from "@/store/filter-context";
import { SidebarContextProvider } from "@/store/sidebar-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CartContextProvider>
          <SidebarContextProvider>
            <ActiveColorContextProvider>
              <FilterContextProvider>{children}</FilterContextProvider>
            </ActiveColorContextProvider>
          </SidebarContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
