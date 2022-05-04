import "./scss/App.scss";
import EditIntern from "./components/EditIntern";
import InternList from "./components/InternList";
import { Routes, Route } from "react-router-dom";
// import logo from "./svgs/logo.svg";
import { ReactComponent as Logo } from "./svgs/logo.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Logo />
      </header>
      <Routes>
        <Route path="/interns/:id" exact element={<EditIntern />} />
        <Route path="/" element={<InternList />} />
      </Routes>
    </div>
  );
}

export default App;
