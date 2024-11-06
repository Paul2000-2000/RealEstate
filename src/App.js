import Contact from "./views/Contact/Contact";
import GetStarted from "./views/GetStarted/GetStarted";
import Hero from "./views/Hero/Hero";
import Residencies from "./views/Residencies/Residencies";
import Value from "./views/Value/Value";

function App() {
  return (
    <div>
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;
