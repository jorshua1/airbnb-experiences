// import './App.css';
import Navbar from "./Components/Navbar.js";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="">
      {/* <Container />
      <Joke
        setup="I got my daughter a fridge for her birthday"
        punch="i can't wait to see he face light up when she opens it"
      />
      <Joke
        setup="How the hacker escape the police"
        punch="He just ransomware!"
      />
      <Joke
        setup="why don't pirates travel the mountains roads"
        punch="Scurvy"
      /> */}
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
