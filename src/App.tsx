import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/ui/apple-preloader";
import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from "@/components/reactbits/followCursor";

import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";
import Moto from "@/components/Moto";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
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
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
        }}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <FollowCursor />
          <Navbar />
          <Hero />
          <AboutUs />
          {/* <Services /> */}
          <Moto />
          <Portfolios />
        </ThemeProvider>
      </ReactLenis>
    </>
  );
}

export default App;
