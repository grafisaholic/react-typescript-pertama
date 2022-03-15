import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type PropsLayout = {
  children: ReactNode;
};

function Layout({ children }: PropsLayout) {
  return (
    <div>
      <Navbar />

      <main className="w-full h-full mt-[70px]">
        <section className="max-w-4xl mx-auto lg:px-8 dark:text-gray-300">
          <div className="space-y-3 divide-y font-sans p-3">{children}</div>
        </section>
      </main>
    </div>
  );
}

export default Layout;
