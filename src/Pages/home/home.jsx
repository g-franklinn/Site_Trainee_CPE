import "./StylesHome";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesHome";


function Home() {

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

export default Home;
