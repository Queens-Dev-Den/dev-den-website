import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <section id="home"></section>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
