import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import FollowCursor from "@/components/reactbits/followCursor";
import Services from "@/components/services";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <FollowCursor /> */}
      <Navbar />
      <Hero />
      <Services />
    </ThemeProvider>
  );
}

export default App;
