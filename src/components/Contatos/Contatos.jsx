import { useState } from "react";
import { motion } from "framer-motion";

import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6";

import styles from "../Contatos/Contatos.module.scss";

function Contatos() {
  const [contatos] = useState([
    {
      id: 1,
      item: <IoLogoLinkedin />,
      titulo: "LinkedIn",
    },
    {
      id: 2,
      item: <MdEmail />,
      titulo: "Email",
    },
    {
      id: 3,
      item: <FaSquareGithub />,
      titulo: "GitHub",
    },
    {
      id: 4,
      item: <FaSquareWhatsapp />,
      titulo: "WhatsApp",
    },
  ]);

  return (
    <>
      <motion.div
        className={styles.tituloContatos}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>CONTATOS</h1>
      </motion.div>

      <motion.section
        className={styles.sectionContatos}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {contatos.map((item) => (
          <article key={item.id} className={styles.cardContatos}>
            {item.item}
            <h2>{item.titulo}</h2>
          </article>
        ))}
      </motion.section>
    </>
  );
}

export default Contatos;