import "./StylesEditarPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesEditarPerfil";
import { StyledButton, StyledForm, StyledInput } from "./StylesEditarPerfil";



function EditarPerfil() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Editar Perfil</h1>
              <div className="menuInterno">
                <StyledForm>
                  <h2>Nome:</h2>
                  <StyledInput type="text" placeholder="Alterar Nome" />
                  <h2>Email:</h2>
                  <StyledInput type="text" placeholder="Alterar Email" />
                  <h2>Departamento:</h2>
                  <StyledInput type="text" placeholder="Alterar Departamento" />
                  <h2>Cargo:</h2>
                  <StyledInput type="text" placeholder="Alterar Cargo" />
                  <h2>Senha:</h2>
                  <StyledInput type="text" placeholder="Alterar Senha" />
                  <StyledButton>Salvar Alterações</StyledButton>
                </StyledForm>
                </div>

            </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default EditarPerfil;
