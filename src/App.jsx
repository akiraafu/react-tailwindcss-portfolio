import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
