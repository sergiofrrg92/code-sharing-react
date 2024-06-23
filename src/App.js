import "./App.css";
import devChallengesLogo from "./images/devchallenges-logo.svg";
import Header from "./components/Header";

function App() {
  return (
    <div classNameName="App">
      <Header />

      <main>
        <img src={devChallengesLogo} alt="A beautiful landscape" />
        <h3 className="title">Responsive Web Developer Starter</h3>
      </main>
    </div>
  );
}

export default App;
