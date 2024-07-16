import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../projects/ProjectCard";
import Loading from "../layout/Load";
import { useState, useEffect } from "react";

function Project() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("https://json-server-vercel-main-ten.vercel.app/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.error(err));
    }, 1300);
  }, []);

  function removeProjects(id) {
    fetch(`https://json-server-vercel-main-ten.vercel.app/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto Removido com Sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.parteCima}>
        <div className={styles.title_container}>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Novo Projeto" />
        </div>
        {message && <Message type="success" msg={message} />}
        {projectMessage && <Message type="success" msg={projectMessage} />}
      </div>
      <div className={styles.cardsProjets}>
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((projects) => (
              <ProjectCard
                id={projects.id}
                name={projects.name}
                budget={parseFloat(projects.budget)}
                category={projects.category.name}
                key={projects.id}
                handleRemove={removeProjects}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Project;
