import { Footer } from "./styles.js";
import { Header } from "./styles.js";
import { PageContent } from "./styles.js";


function App() {

  return (
    <>
      <Header>
        <h1>DOTI Musical</h1>
        <div className="header-menu">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Cadastro</a>
          <a href="#">Meu Perfil</a>
          <a href="#">Editar Perfil</a>
        </div>
      </Header>

      <PageContent>

      </PageContent>

      <Footer>
			<p>2023 © Doti Musical</p>
      </Footer>
    </>
  )
}
 
export default App
