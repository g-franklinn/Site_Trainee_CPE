import "./StylesCadastro";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesCadastro";



function Cadastro() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Cadastro</h1>
              <div className="menuInterno">
              
              </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>

    </>
  )
} 

export default Cadastro;
