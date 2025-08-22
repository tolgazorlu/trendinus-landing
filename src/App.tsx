import { Button } from "@/components/ui/button";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
