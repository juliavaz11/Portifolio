import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Loading from "./components/Loading/Loading.jsx";
import "./global.scss"


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;