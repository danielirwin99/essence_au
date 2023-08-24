import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sneaker from "./pages/Sneaker";
import About from "./pages/About";
import Footer from "./components/Footer";
import TopSellers from "./pages/TopSellers";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Categories from "./pages/Sneakers/Categories";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sneaker/:id" element={<Sneaker />} />
          <Route path="/about" element={<About />} />
          <Route path="/top-sellers" element={<TopSellers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/categories/*" element={<Categories />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
