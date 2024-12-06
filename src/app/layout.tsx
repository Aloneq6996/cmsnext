"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          <header>
            <h1>Mega sklep</h1>
            <nav>
              <ul>
                <li>
                  <a href="/admin">Admin</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <SessionProvider>{children}</SessionProvider>
          </main>
          <footer>
            <p>© 2024 Mega sklep.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
