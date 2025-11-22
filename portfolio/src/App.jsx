import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />
      <CardContainer />
      <Footer />
    </div>
  );
}
