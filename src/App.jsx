import Contato from "./Components/Contato/contato"
import Experiencia from "./Components/Experiencia/experiencia"
import Header from "./Components/Header/header"
import Hero from "./Components/Hero/hero"
import OutrosProjetos from "./Components/OutrosProjetos/outrosProjetos"
import Projetos from "./Components/Projetos/projetos"
import Sobre from "./Components/Sobre/sobre"



function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Sobre/>
      <Experiencia/>
      <Projetos/>
      <OutrosProjetos/>
      <Contato/>
    </>
  )
}

export default App
