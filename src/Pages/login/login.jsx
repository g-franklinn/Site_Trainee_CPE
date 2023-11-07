import "./StylesLogin";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesLogin";



function Login () {

  return (

    <>

      <div>
        <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Login</h1>
              <div className="menuInterno">
              
              </div>
            </div>
          </PageContent>


        <FooterBase/>
      </div>
    
    </>
  )
}

export default Login;