import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CodeBox from "./components/CodeBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes basename="/code-sharing-react">
        <Route path="/:code" element={<CodeBox />} />
        <Route path="/" element={<CodeBox />} />
      </Routes>
    </div>
  );
}

export default App;
