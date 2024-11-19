"use client"; // This marks the component as a Client Component

import { Provider } from "react-redux";
import { store } from "@/app/store"; // Adjust the path as necessary
import "@/app/globals.css";

// Client-side layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap your entire app with the Redux Provider */}
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
