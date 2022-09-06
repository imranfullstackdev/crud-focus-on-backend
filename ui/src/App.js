import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import ViewUser from "./Component/ViewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ViewUser" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
