import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-200">
        <Navbar />
        <CardContainer />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
