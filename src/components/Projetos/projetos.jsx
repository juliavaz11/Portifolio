import { useState } from "react";
import { FaPaw } from "react-icons/fa6";
import { RiRecycleFill } from "react-icons/ri";
import { PiTreeFill } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";

import styles from "./Projetos.module.scss";
import { motion } from "framer-motion";
function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: <FaPaw/>,
      nome: "PetAdopt",
      descricao:
        "Projeto desenvolvido com o objetivo de facilitar a adoção de pets, conectando animais que precisam de um lar a pessoas interessadas em adotar. A aplicação foi construída utilizando HTML, SCSS e JavaScript.",
      link: "https://pet-adopt-taupe.vercel.app",
      },

    {
      id: 2,
      imagem: <RiRecycleFill />,
      nome: "ReciclaTech",
      descricao:
        "Plataforma criada para incentivar a doação de eletrônicos, facilitando a conexão entre doadores e interessados. Desenvolvida com HTML para estruturação e SCSS para um design moderno, limpo e responsivo.",
      link: "https://recicla-tech-m1-flame.vercel.app",
    },

    {
      id: 3,
      imagem: <PiTreeFill />,
      nome: "VerdeAção",
      descricao:
        "Verde Ação é um projeto que conecta pessoas interessadas em participar de ações voluntárias, incentivando o engajamento social e ambiental. Desenvolvido com HTML e SCSS, Este foi o primeiro projeto que desenvolvi durante minha formação na Vai na Web. ",
      link: "https://verde-acao-empower.vercel.app",
      },
    {
      id: 4,
      imagem: <TbHeartHandshake />,
      nome: "Connect",
      descricao:
        "Meu primeiro projeto desenvolvido em React, criado para conectar empresas a projetos sociais impactantes. A plataforma une empresas, pessoas e organizações com o objetivo de gerar impacto positivo e transformar realidades por meio de ações sociais.",
      link: "https://desafio-connect.vercel.app"
      },
  ]);

  return (
    <>
      <motion.div
        className={styles.tituloProjetos}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
            {item.imagem}
            <h2>{item.nome}</h2>
            <p className={styles.textoCards}>{item.descricao}</p>

            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.btnVisitar}> ACESSAR </a>
          </article>
        ))}
      </motion.section>
    </>
  );
}
export default Projetos;
