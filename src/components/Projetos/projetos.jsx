import { useState } from "react";
import PetAdopt from "../../assets/petadopt.png";
import ReciclaTech from "../../assets/reciclatech.jpg";
import VerdeAcao from "../../assets/verdeacao.jpg";
import Connect from "../../assets/connect.png";
import styles from "./Projetos.module.scss";
import { motion } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto desenvolvido com o objetivo de facilitar a adoção de pets, conectando animais que precisam de um lar a pessoas interessadas em adotar. A aplicação foi construída utilizando HTML para a estruturação das páginas, SCSS para a estilização e organização visual, e JavaScript para adicionar interatividade e dinamismo ao site.",
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Plataforma criada para incentivar a doação de eletrônicos, facilitando a conexão entre doadores e interessados. Desenvolvida com HTML para estruturação e SCSS para um design moderno, limpo e responsivo.",

    },

    {
      id: 3,
      imagem: VerdeAcao,
      nome: "VerdeAcao",
      descricao: "Verde Ação é um projeto que conecta pessoas interessadas em participar de ações voluntárias, incentivando o engajamento social e ambiental. Desenvolvido com HTML e SCSS, o site apresenta uma estrutura organizada e um design responsivo, proporcionando uma navegação clara e acessível. ",
    },
    {
      id: 4,
      imagem: Connect,
      nome: "Connect",
      descricao: "Connect foi meu primeiro projeto desenvolvido em React, criado para conectar empresas a projetos sociais impactantes. A plataforma une empresas, pessoas e organizações com o objetivo de gerar impacto positivo e transformar realidades por meio de ações sociais.",
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
            <p className={styles.textoCards}>{item.descricao}</p>
            <button className={styles.btnVisitar}>ACESSAR</button>
          </article>
        ))}
      </motion.section>
    </>
  );
}
export default Projetos;
