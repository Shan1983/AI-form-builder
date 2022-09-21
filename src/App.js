import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="content">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form/:id" element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
