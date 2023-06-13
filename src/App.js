import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home';
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contatos</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">Novos Projetos</Link>
        
      </ul>

      <Routes>
        <Route path="/" element={<Container customClass = "min-height"><Home /></Container>} />
        <Route path="/company" element={<Container><Company /></Container>} />
        <Route path="/contact" element={<Container><Contact /></Container>} />
        <Route path="/newproject" element={<Container><NewProject /></Container>} />
      </Routes>
    </Router>
  );
}

export default App;
