import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Moto from "@/components/Moto";
import { ReactLenis } from "lenis/react";

import FollowCursor from "@/components/reactbits/followCursor";
import Services from "@/components/services";

function App() {
  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <FollowCursor />
        <Navbar />
        <Hero />
        <Moto />
        <Services />
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;
