import { ReactComponent as Linkedin } from "../style/images/linkedin.svg";
import { ReactComponent as Whatsapp } from "../style/images/whatsapp.svg";
import Mobile from "./buttons/mobile";

function MenuMobile(){
  return(
    <>
      <section className='grid justify-items-center mt-14 space-y-4 text-xl'>
        <h1 className='text-xl text-black-200 absolute top-1 left-3'>Menu</h1>        
        <Mobile value='Parceiros' href='#partners'/>
        <Mobile value='Contato' href='#contact'/>
        <a href='https://br.linkedin.com/likedin' target='blank' className='w-fit flex items-center gap-2 grayscale transition duration-150 hover:ease-out'>
          <label className='cursor-pointer hover:text-linkedin'>Linkedin</label>
          <Linkedin/>
        </a>
        <a href='https://wa.me/5551999673527' target='blank' className='w-fit flex items-center gap-2 grayscale transition duration-150 hover:ease-out'>
          <label className='cursor-pointer hover:text-green'>WhatsApp</label>
          <Whatsapp/>
        </a>
      </section>
    </>
  )
}

export default MenuMobile;