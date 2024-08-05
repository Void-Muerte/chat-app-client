import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "@pages/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
