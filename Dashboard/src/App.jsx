import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard"; // Assuming Dashboard.js is in the same directory

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* You can add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
