import { ReactComponent as PartnersBg } from "../style/images/partners-bg.svg"
import Primary from "../components/form/button";
import Carousel from "../components/partners/carousel";
import Heading from "../components/heading";

function Partners(){
  return(
    <>
      <section className='grid justify-items-center sm:h-full sm:relative' id='partners'>
        <PartnersBg className='sm:block hidden'/>
        <section className='place-self-center sm:my-0 space-y-6 space-y-2 w-full sm:absolute'>
          <div className='flex justify-between items-center'>
            <div>
              <Heading level={2}>Parceiros</Heading>
              <p className='sm:text-lg text-sm'>Confira os produtos ao acessar nossos parceiros</p>
            </div>
            <div className='sm:block hidden'>
              <a href='https://wa.me/5551999673527' target='blank'>
                <Primary value='Fale conosco pelo WhatsApp'/>
              </a>
            </div>
          </div>
          <Carousel/>
        </section>
      </section>
    </>
  )
}

export default Partners;