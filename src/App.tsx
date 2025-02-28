import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/ui/apple-preloader";
import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from "@/components/reactbits/followCursor";

import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";
import Moto from "@/components/Moto";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Portfolios from "@/components/Portfolios";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>

      <ReactLenis
        root
        options={{
          lerp: 0.1, // Adjust this value to control the smoothness (0.1 is a good starting point)
          duration: 1.2, // Adjust the duration of the scroll animation
          smoothWheel: true, // Enable smooth scrolling for mouse wheel
        }}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <FollowCursor />
          <Navbar />
          <Hero />
          <Moto />
          <Services />
          <Portfolios />
        </ThemeProvider>
      </ReactLenis>
    </>
  );
}

export default App;
