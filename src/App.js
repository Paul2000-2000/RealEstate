import Contact from "./views/Contact/Contact";
import GetStarted from "./views/GetStarted/GetStarted";
import Hero from "./views/Hero/Hero";
import Residencies from "./views/Residencies/Residencies";
import Value from "./views/Value/Value";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
