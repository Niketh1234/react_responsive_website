import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
