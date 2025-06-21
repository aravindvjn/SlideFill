import Header from "@/components/headers/header";
import SideBar from "@/components/side-bar/side-bar";
import { Fragment } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <SideBar />
      <section className="flex-row w-full">
        <Header />
        {children}
      </section>
    </main>
  );
}
