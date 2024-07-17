import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.module.css";
import logo from "../../img/costs_logo.png";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          {/* <li className={styles.item}>
            <Link to="/contact">Contatos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li> */}
        </ul>

        <div className={styles.items_menu_mobile}>
          <i className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
          <ul
            className={`${styles.menu_mobile} ${
              isMenuOpen ? styles.show : styles.hide
            }`}
          >
            <li className={styles.lista}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.lista}>
              <Link to="/projects">Projetos</Link>
            </li>
            <li className={styles.lista}>
              <Link to="/contact">Contatos</Link>
            </li>
            <li className={styles.lista}>
              <Link to="/company">Empresa</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
