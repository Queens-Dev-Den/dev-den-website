import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Router>
        <section id="home"></section>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calendar" exact element={<Calendar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
