  import logo from "../style/images/logo.svg"
import { Icon } from "@iconify/react";

function Footer(){
  return(
    <>
      <section className='flex sm:flex-row sm:justify-between justify-center items-center flex-col bg-black-200 p-10 text-xs'>
        <>
          <div>
            <img src={logo} className='w-40' alt='Suden Representações'/>
            <span className='flex flex-col my-2'>
              <label>Suden Representações LTDA</label>
              <label>© 2023</label>
            </span>
          </div>
        </>
        <>
          <a href='#header'>
            <div className='flex justify-end items-center gap-2 text-lg text-black-700 hover:text-black transition duration-150'>
              <span>Voltar ao início</span>
              <span><Icon icon='iconoir:fast-arrow-up' height='24' /></span>
            </div>
          </a>
        </>
      </section>
    </>
  )
}

export default Footer;