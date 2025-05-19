import { useEffect, useState } from "react";

import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";

import Preloader from "@/components/ui/apple-preloader";
import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from "@/components/reactbits/followCursor";

import { Moto } from "@/pages/main/moto";
import { Hero } from "@/pages/main/hero";
import { Services } from "@/pages/main/services";
import { Analytics } from "@/pages/main/analytics";
import { Navbar } from "@/components/layout/navbar";

const App = () => {
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
          <Analytics />
          <Services />
          <Moto />
        </ThemeProvider>
      </ReactLenis>
    </>
  );
};

export default App;
