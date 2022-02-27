// import './App.css';
import Navbar from "./Components/Navbar.js";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Joke from "./Components/Joke.js";
import jokesData from "./data/jokesData.js";

function App() {

  const jokesElements = jokesData.map(joke =>{
    return <Joke setup={joke.setup} punch={joke.punch} />
  })

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
      {jokesElements}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Cards /> */}
    </div>
  );
}

export default App;
