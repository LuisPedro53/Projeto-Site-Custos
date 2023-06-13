import styles from './Container.module.css';

function Container(props){
  return(
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {/* AQUI É PRA SIMBOLIZAR QUE OS ITENS FIQUEM DENTRO DESSA DIV, NO CASO AS ROTAS */}
      {props.children}
    </div>
  )
};

export default Container;