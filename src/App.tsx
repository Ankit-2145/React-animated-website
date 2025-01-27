import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import SplashCursor from "./components/bits/cursor";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <SplashCursor /> */}
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
