// import './App.css';
import Forms from "./Components/Forms.js";

function App() {
  /*   const jokesElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div className="">{jokesElements}</div>; */

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <Forms />
    </div>
  );
}

export default App;
