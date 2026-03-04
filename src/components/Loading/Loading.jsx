import { motion } from "framer-motion";
import styles from "../Loading/Loading.module.scss";

function Loading() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default Loading;