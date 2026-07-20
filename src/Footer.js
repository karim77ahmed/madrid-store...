import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Time from "./Time";
 export default function Footer(){
return(
<footer>
    <p> Copyright &copy; 2025 Madrid Store | All Rights Reserved </p>
    <div id="time"><Time/></div>
    <a href="#!" target="_blank"> <FaWhatsapp/> </a>
    <a href="#!" target="_blank"> <FaFacebook/> </a>
    <a href="#!" target="_blank"> <FaTiktok/>  </a>
    <a href="#!" target="_blank"> <FaInstagram/> </a>
  </footer>
)
}