import Form from "../components/form/form";
import Heading from "../components/heading";
import { ReactComponent as Linkedin } from "../style/images/linkedin.svg";
import { ReactComponent as Whatsapp } from "../style/images/whatsapp.svg";


function Contact(){
  return(
    <>
      <section className='sm:flex flex-col sm:gap-8 sm:space-y-0 space-y-6' id='contact'>
        <>
          <div className='sm:flex justify-between items-start'>
            <Heading level={2}>Solicite uma cotação</Heading>
            <label className='sm:block sm:gap-0 sm:w-[450px] sm:text-right sm:text-xl block gap-1 text-base text-black'>
              <p>Preencha o formulário ou entre</p>
              <p>em contato diretamente conosco</p>
            </label>
            
          </div>
        </>
        <>
          <article className='sm:flex'>
            <>
              <div className='sm:w-2/4'>
                <Form/>
              </div>
            </>
            <>
              <div className='flex flex-col justify-around items-center sm:items-end my-6 sm:my-0 sm:w-2/4 sm:text-right text-center '>
                <article className='flex flex-col'>
                  <span className='sm:text-5xl text-3xl text-black'>55 51 23130093</span>
                  <span className='sm:text-xl text-md text-black-700'>
                    <p>Rua Tomaz Flores 191</p>
                    <p>Porto Alegre, Brasil</p>
                  </span>
                </article>
                <div className='flex justify-end gap-2'>
                  <a href='https://br.linkedin.com/likedin' target='blank' className='grayscale hover:grayscale-0 transition duration-150 hover:ease-out'>
                    <Linkedin className='sm:w-12 sm:h-12 w-10 h-10'/>
                  </a>
                  <a href='https://wa.me/5551999673527' target='blank' className='grayscale hover:grayscale-0 transition duration-150 hover:ease-out'>
                    <Whatsapp className='sm:w-12 sm:h-12 w-10 h-10'/>
                  </a>
                </div>
              </div>
            </>
          </article>
        </>
      </section>
    </>
  )
}

export default Contact;