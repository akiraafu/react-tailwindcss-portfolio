import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/contact/ContactPage";
import Work from "./pages/work/Work";
import AllWork from "./pages/work/AllWork";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<AllWork/>} />
            <Route path="/work/:id" element={<Work />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
