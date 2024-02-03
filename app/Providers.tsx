"use client";

import { SidebarContextProvider } from "@/store/sidebar-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SidebarContextProvider>{children}</SidebarContextProvider>;
}
