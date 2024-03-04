import "./App.css";
import { Dishes } from "./components/Dishes/Dishes";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Dishes />
    </>
  );
}

export default App;
