import { Icon } from "@iconify/react";
import { ReactComponent as Logo } from "../style/images/logo.svg"

function Footer(){
  return(
    <>
      <section className='flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-4 p-10 text-xs bg-black-200'>
        <>
          <div>
            <Logo className='w-40'/>
            <span className='mt-1'>
              <label>©2023 Suden Representações</label>
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