import { useState } from "react";
import PetAdopt from "../../assets/petadopt.jpg";
import ReciclaTech from "../../assets/reciclatech.jpg";
import VerdeAcao from "../../assets/verdeacao.jpg";
import Connect from "../../assets/connect.png";
import styles from "./Projetos.module.scss";
import { motion } from "framer-motion";
function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de Pets",
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto focado para facilitar doações de eletrônicos",
    },

    {
      id: 3,
      imagem: VerdeAcao,
      nome: "VerdeAcao",
      descricao: "Projeto que conecta interessados em ações voluntárias.",
    },
    {
      id: 4,
      imagem: Connect,
      nome: "Connect",
      descricao: "fazer",
    },
  ]);

  return (
    <>
      <motion.div
        className={styles.tituloProjetos}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>PROJETOS</h1>
      </motion.div>

      <motion.section
        className={styles.sectionProjetos}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projetos.map((item) => (
          <article key={item.id} className={styles.cardProjetos}>
            <img src={item.imagem} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <button className={styles.btnVisitar}>VISITAR</button>
          </article>
        ))}
      </motion.section>
    </>
  );
}
export default Projetos;
