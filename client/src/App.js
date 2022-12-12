import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
