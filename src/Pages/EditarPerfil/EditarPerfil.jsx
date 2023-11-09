import "./StylesEditarPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesEditarPerfil";
import { StyledButton, StyledForm, StyledInput } from "../../styles";



function EditarPerfil() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Editar Perfil</h1>
              <div className="menuInterno">

              <div className="containerEditar">
                  <div className="infoUsuarios">
                      <h2>Nome:</h2>
                      <StyledInput type="text" placeholder="" />
                      <h2>Email:</h2>
                      <StyledInput type="text" placeholder="" />
                      <h2>Departamento:</h2>
                      <StyledInput type="text" placeholder="" />
                      <h2>Cargo:</h2>
                      <StyledInput type="text" placeholder="" />
                  </div>
                      <StyledButton>Salvar Alterações</StyledButton>
                </div>
              
              </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default EditarPerfil;
