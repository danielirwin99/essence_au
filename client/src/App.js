import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sneaker from "./pages/Sneaker";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sneaker/:id" element={<Sneaker/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
