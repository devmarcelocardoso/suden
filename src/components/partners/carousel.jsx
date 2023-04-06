import LogoPartners from "./logoPartners";
import dewertOkin from "../../style/images/partners/dewertOkin.svg";
import seccon from "../../style/images/partners/seccon.svg";
import techno from "../../style/images/partners/techno.svg";
import greatStar from "../../style/images/partners/greatStar.svg";
import pmr from "../../style/images/partners/pmr.svg";

function Carousel(){
  return(
    <LogoPartners logos={[
      {
        id: dewertOkin,
        url: <a href='https://phoenixmecano.com.br/a-empresa' target='blank'><img src={dewertOkin} alt='Dewert Okin'/></a>
      },
      {
        id: seccon,
        url: <a href='https://www.seccon.com.br/a-seccon' target='blank'><img src={seccon} alt='Seccon'/></a>
      },
      {
        id: techno,
        url: <a href='https://www.techno.it/company' target='blank'><img src={techno} alt='Techno'/></a>
      },
      {
        id: greatStar,
        url: <a href='http://www.greatstartech.com/en/About/About_Us' target='blank'><img src={greatStar} alt='Great Star Technology'/></a>
      },
      {
        id: pmr,
        url: <a href='https://www.pmrresistencias.com.br/somos-pmr.php' target='blank'><img src={pmr} alt='PMR Resistências'/></a>
      }
    ]} />
  )
}

export default Carousel;

              

              
              

              
