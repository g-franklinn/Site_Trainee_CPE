import "./StylesMeuPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "../../styles";


function MeuPerfil() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
              <div className="menuInterno">

              </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default MeuPerfil;
