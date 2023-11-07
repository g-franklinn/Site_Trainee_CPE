import {Footer} from "./Styles";
import Facebook from "../../assets/square-facebook.svg";
import Instagram from "../../assets/square-instagram.svg";
import WhatsApp from "../../assets/square-whatsapp.svg";
import X from "../../assets/square-x-twitter.svg";

function FooterBase(){

    return(
       <Footer>
            <div className="SocialMedia">
            <img src={Facebook} className="icon" />
            <img src={Instagram} className="icon" />
            <img src={WhatsApp} className="icon" />
            <img src={X} className="icon"/>
            </div>
            <p>2023 © Doti Musical</p>
       </Footer> 
    )

}

export default FooterBase;