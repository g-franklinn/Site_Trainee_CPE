import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent, StyledForm, StyledInput, StyledButton } from "./StylesLogin";
import Violino from "../../assets/Violino.svg";
import Nota1 from "../../assets/Nota 1.svg";
import Nota4 from "../../assets/Nota 4.svg";
import Arpa from "../../assets/Arpa.svg";
import { useState } from "react";
import api from "../../services/Api";



function Login () {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({email, senha});

    try {
      const res = api.post("/login", {email, senha});
      console.log(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.message);
    }

  };

  return (
    <>
      <div>
        <HeaderBase />
          <PageContent>

          <img src={Nota1}  className="nota1" />
          <img src={Violino}  className="violino" />

            <div className="container">
              <h1>Login</h1>
              <div className="menuInterno">

                <StyledForm onSubmit={handleSubmit}>
                  <label htmlFor="email">Usuário:</label>
                  <StyledInput  id="email"  name="email" type="email" placeholder="Digite seu login" required onChange={(e) => setEmail(e.target.value)}/>

                  <label htmlFor="senha">Senha:</label>
                  <StyledInput  id="senha"  name="senha" type="password" placeholder="Digite sua senha" required onChange={(e) => setSenha(e.target.value)}/>
                  <StyledButton className="loginBtn" type="submit">Entrar</StyledButton>
                </StyledForm>
              </div>
            </div>
            
          <img src={Nota4}  className="nota4" />
          <img src={Arpa}  className="arpa" />

          </PageContent>
        <FooterBase/>
      </div>
    </>
  )
}

export default Login;