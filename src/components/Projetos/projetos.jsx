import { useState } from "react";
import PetAdopt from "../../assets/petadopt.jpg";
import ReciclaTech from "../../assets/reciclatech.jpg";
import VerdeAcao from "../../assets/verdeacao.jpg";
import styles from "./Projetos.module.scss"



function Projetos() {

const [projetos, setProjetos] = useState([ 
    {
        id: 1,
        imagem: PetAdopt,
        nome: "PetAdopt",
        descricao: "Projeto criado para adoção de Pets"
    },

    {
        id: 2,
        imagem: ReciclaTech,
        nome: "ReciclaTech",
        descricao: "Projeto focado para facilitar doações de eletrônicos"
    },

    {
        id: 3,
        imagem: VerdeAcao,
        nome: "VerdeAcao",
        descricao: "Projeto focado para facilitar doações de eletrônicos"
    }

]   )

  return (
    
     <section className={styles.sectionProjetos}>
        {projetos.map( (item) => (

        <article key={item.id} className={styles.cardProjetos}>
            <img src={item.imagem} alt="" />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
        </article>
        

        )) }
      </section>
    
  );
}
export default Projetos;