import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <>
              <Navbar />  {}
              <Dashboard />  {/* Dashboard */}
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
