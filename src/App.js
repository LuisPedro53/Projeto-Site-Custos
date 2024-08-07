import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />
        <Route
          path="/projects"
          element={
            <Container>
              <Projects />
            </Container>
          }
        />
        <Route
          path="/company"
          element={
            <Container>
              <Company />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container>
              <Contact />
            </Container>
          }
        />
        <Route
          path="/newproject"
          element={
            <Container>
              <NewProject />
            </Container>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Container>
              <Project />
            </Container>
          }
        />
      </Routes>
      {/* <Footer />   */}
    </Router>
  );
}

export default App;
