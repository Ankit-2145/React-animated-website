import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
