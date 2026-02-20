import style from "../Inicio/Inicio.module.scss";
import imgPerfil from "../../assets/fotoPerfil.jpeg";
import { motion } from "framer-motion";

function Inicio() {
  return (
    <section className={style.Inicio}>
      <motion.div
        className={style.boxInicio}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 10 }}
        transition={{ duration: 0.8}}
      >
        
        <h1 className={style.tituloInicio}>JULIA VAZ</h1>
         <h2 className={style.subTitulo}>DESENVOLVEDORA FRONTEND </h2> 
        <p className={style.textoInicio}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          unde placeat modi quam fugit tempore pariatur, nam voluptatum natus
          iste sit maiores debitis, delectus suscipit recusandae harum.
          Corporis, impedit repudiandae.
        </p>
      </motion.div>
      <motion.img
        className={style.imgPerfil}
        src={imgPerfil}
        alt=""
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 10 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
export default Inicio;
