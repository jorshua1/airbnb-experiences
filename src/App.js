// import './App.css';
import Navbar from "./Components/Navbar.js";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Joke from "./Components/Joke.js";
import jokesData from "./data/jokesData.js";
import Messages from "./Components/Messages.js";

function App() {
/*   const jokesElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div className="">{jokesElements}</div>; */

  return(
    <div>
      <Messages></Messages>
    </div>
  )
}

export default App;
