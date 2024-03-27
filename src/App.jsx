import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="p-5">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
