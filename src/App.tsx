import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
