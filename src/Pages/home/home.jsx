import "./StylesHome";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import Carrossel from "../../components/carrossel/Carrossel";
import { PageContent } from "./StylesHome";
import { Avisos } from "./StylesHome";
import Tambor from "../../assets/Tambor.svg";
import Violino from "../../assets/Violino.svg";
import Teclado from "../../assets/Teclado.svg";
import Saxofone from "../../assets/Saxofone.svg";


function Home() {

  return (
    <>

      <div>
          <HeaderBase />

          <Avisos>
          <h1>Avisos:</h1>
          </Avisos>
          
          

          <PageContent>
          <Carrossel/>  
          <img src={Tambor}  className="tambor" />
          <img src={Violino}  className="violino" />
          
              <div className="menuInterno">

              <h1>Usuários Online</h1>

              </div>
          </PageContent>

          <FooterBase/>
      </div>

    </>
  )
} 

export default Home;
