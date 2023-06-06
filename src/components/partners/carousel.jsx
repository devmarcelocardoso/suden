import LogoPartners from "./logoPartners";
import { ReactComponent as DewertOkin } from "../../style/images/partners/dewertOkin.svg";
import { ReactComponent as Seccon } from "../../style/images/partners/seccon.svg";
import { ReactComponent as Techno } from "../../style/images/partners/techno.svg";
import { ReactComponent as GreatStar } from "../../style/images/partners/greatStar.svg";
import { ReactComponent as Pmr } from "../../style/images/partners/pmr.svg";

function Carousel(){
  return(
    <LogoPartners logos={[
      {
        id: DewertOkin,
        url: <a href='https://phoenixmecano.com.br/atuadores-eletricos/' target='blank'><DewertOkin/></a>
      },
      {
        id: Seccon,
        url: <a href='https://www.seccon.com.br/produtos' target='blank'><Seccon/></a>
      },
      {
        id: Techno,
        url: <a href='https://www.techno.it/prodotti' target='blank'><Techno/></a>
      },
      {
        id: GreatStar,
        url: <a href='http://www.greatstartech.com/en/Products/Product_categories_1/' target='blank'><GreatStar/></a>
      },
      {
        id: Pmr,
        url: <a href='https://www.pmrresistencias.com.br/produtos.php' target='blank'><Pmr/></a>
      }
    ]} />
  )
}

export default Carousel;

              

              
              

              
