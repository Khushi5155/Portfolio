import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-[var(--color-canvas)] text-[var(--color-text-primary)] transition-colors duration-200 relative">
        <Navbar />
        <CardContainer />
        <Footer />
        <MusicPlayer />
      </div>
    </ThemeProvider>
  );
}
