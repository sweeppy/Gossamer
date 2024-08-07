import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Login from "./Components/Auth/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MainPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
