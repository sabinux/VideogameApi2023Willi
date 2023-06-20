import React from "react";
import styles from "./Landing.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleOnStart = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
    history("/home");
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.paragraph}>
        Hey!Bienvenidos a mi proyecto individual
        <br /> Este proyecto concites en el mundo de los video juegos y sus diferentes generos
          <br /> Ademas podresmos agregar y crear video juego que queramos
         <br /> Asi acompañame en esta aventura
          <br />Willi Garcia 
        </p>
      </div>

      <Link to="/home">
        <input
          type="button"
          className={styles.button}
          onClick={(e) => handleOnStart(e)}
        />
      </Link>
    </div>
  );
};

export default Landing;
