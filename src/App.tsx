import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Repositories from "./components/Repositories/Repositories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
}

export default App;
