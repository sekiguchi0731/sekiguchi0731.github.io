import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Club from "./components/Club";
import Major from "./components/Major";
import Experience from "./components/Experience";
import "./components/Global.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Header は常に表示 */}
        <Header />

        {/* メインコンテンツ部分 */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/club" element={<Club />} />
            <Route path="/major" element={<Major />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>

        {/* Footer も常に表示 */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
