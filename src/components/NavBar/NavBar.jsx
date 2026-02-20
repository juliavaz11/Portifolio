import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projetos from "../Projetos/projetos.jsx"
import Inicio from "../Inicio/Inicio.jsx"
import Contatos from "../Contatos/Contatos.jsx"
import styles from "./NavBar.module.scss"
import {motion} from "framer-motion"

//BrowserRouter: container que vai envolver tudo relacionado as nossas rotas
//Routes: uma caixa que vai envolver todas as rotas
//Route: Define cada rota individualmente
//Link é usado para criar links entre as páginas

function NavBar() {
  return (
    <BrowserRouter>
    <motion.nav className={styles.navBarHeader}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}>
        
        <ul>
            <li> <Link to="/"> INÍCIO </Link> </li>
            <li> <Link to="/projetos"> PROJETOS </Link> </li>
            <li> <Link to="Contatos"> CONTATO </Link> </li>
        </ul>
    </motion.nav>

<Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/projetos" element={<Projetos/>}/>
    <Route path="/contatos" element={<Contatos/>}/>

</Routes>
    </BrowserRouter>
    
  )
}

export default NavBar;