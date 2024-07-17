import style from "../projects/ProjectForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name || !cost || !description) {
      if (!name) toast.error("O nome do serviço é obrigatório.");
      if (!cost) toast.error("O custo do serviço é obrigatório.");
      if (!description) toast.error("A descrição do serviço é obrigatória.");
      return;
    }
    const newService = { name, cost, description };
    projectData.services.push(newService);
    handleSubmit(projectData);

    setName("");
    setCost("");
    setDescription("");
    
  }

  return (
    <>
      <form onSubmit={submit} className={style.form}>
        <Input
          type="text"
          text="Nome do Serviço"
          name="name"
          placeholder="Insira o nome do Serviço"
          handleOnChange={(e) => setName(e.target.value)}
        />

        <Input
          type="number"
          text="Custo do Serviço"
          name="cost"
          placeholder="Insira o valor total"
          handleOnChange={(e) => setCost(e.target.value)}
        />

        <Input
          type="text"
          text="Descrição do Serviço"
          name="description"
          placeholder="Insira a descrição do Serviço"
          handleOnChange={(e) => setDescription(e.target.value)}
        />

        <SubmitButton text={btnText} />
      </form>
      <ToastContainer />
    </>
  );
}

export default ServiceForm;
