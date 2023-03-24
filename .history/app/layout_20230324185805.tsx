import "./index.css";

import { Providers } from "./GlobalRedux/provider";
import Navigation from "./components/Navigation/Navigation";
import LocationCard from "./components/LocationCard/LocationCard";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
