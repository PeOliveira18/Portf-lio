import Contato from "./Components/Contato/contato"
import Experiencia from "./Components/Experiencia/experiencia"
import Footer from "./Components/Footer/footer"
import Header from "./Components/Header/header"
import Hero from "./Components/Hero/hero"
import Linguagens from "./Components/Linguagens/linguagens"
import OutrosProjetos from "./Components/OutrosProjetos/outrosProjetos"
import Projetos from "./Components/Projetos/projetos"
import Sobre from "./Components/Sobre/sobre"
import styled from "styled-components"

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width:100%;

`



function App() {
  return (
    <AppContainer>
      <Header/>
      <Hero/>
      <Sobre/>
      <Linguagens/>
      <Experiencia/>
      <Projetos/>
      <OutrosProjetos/>
      <Contato/>
      <Footer/>
    </AppContainer>
  )
}

export default App
