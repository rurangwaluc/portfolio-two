import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./pages/hero/Hero";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <>
    <BrowserRouter>
    <div className="main">
      <Header
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Routes>
        <Route path="/" element={<Hero myTheme={theme}  />} />
        <Route path="/about" element={<About  myTheme={theme} />} />
        <Route path="/skills" element={<Skills  myTheme={theme} />} />
        <Route path="/resume" element={<Resume  myTheme={theme} />} />
        <Route path="/portfolio" element={<Portfolio  myTheme={theme} />} />
        <Route path="/blog" element={<Blog  myTheme={theme} />} />
        <Route path="/contact" element={<Contact  myTheme={theme} />} />
      </Routes>
      <Footer myTheme={theme} />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
