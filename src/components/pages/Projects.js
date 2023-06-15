import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../projects/ProjectCard";
import { useState, useEffect } from "react";

function Project(){

  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = '';

  if(location.state){
    message = location.state.message;
  }

  useEffect (()=>{

    fetch('http://localhost:5000/projects',{
      method: 'GET' ,
      headers:{
        'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then((data)=> {
      console.log(data);
      setProjects(data);
    })
    .catch((err)=>console.error(err));

  },[])

  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to = "/newproject" text = "Novo Projeto"/>
      </div>
      {message && <Message type = "success" msg = {message} />}
      <Container customClass = "start">
        {projects.length > 0 &&
          projects.map((projects) => (
          <ProjectCard 
            id = {projects.id}
            name = {projects.name}
            budget = {projects.budget}
            category={projects.category.name}
            key = {projects.id}
          />
        ))}
      </Container>
    </div>

  )
}

export default Project;