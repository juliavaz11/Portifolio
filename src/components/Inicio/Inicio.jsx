import style from "../Inicio/Inicio.module.scss";
import imgPerfil from "../../assets/fotoPerfil.jpeg";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Inicio() {
  return (
    <section className={style.Inicio}>
      <motion.div
        className={style.boxInicio}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 10 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={style.tituloInicio}>JULIA VAZ</h1>
        <h2 className={style.subTitulo}>DESENVOLVEDORA FRONT-END </h2>
        <p className={style.textoInicio}>
          Criando interfaces responsivas e transformando ideias em experiências
          digitais. Movida por curiosidade, aprendizado contínuo e paixão por
          tecnologia.
        </p>
        <div className={style.icones}>
          <div className={style.iconItem}>
            <FaHtml5 className={style.html} />
            <p>HTML</p>
          </div>

          <div className={style.iconItem}>
            <SiSass className={style.scss} />
            <p>SCSS</p>
          </div>

          <div className={style.iconItem}>
            <IoLogoReact className={style.react} />
            <p>React</p>
          </div>

          <div className={style.iconItem}>
            <SiVite className={style.vite} />
            <p>Vite</p>
          </div>

          <div className={style.iconItem}>
            <IoLogoJavascript className={style.javascript} />
            <p>JavaScript</p>
          </div>
        </div>
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
