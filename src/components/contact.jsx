import Form from "./form/form";
import { ReactComponent as Linkedin } from "../style/images/linkedin.svg";
import { ReactComponent as Whatsapp } from "../style/images/whatsapp.svg";


function Contact(){
  return(
    <>
      <section id='contact' className='sm:flex flex-col gap-8'>
        <>
          <label className='sm:flex justify-between items-start'>
            <h1 className='sm:text-3xl text-xl text-black font-bold'>Solicite uma cotação</h1>
            <label className='sm:block sm:gap-0 sm:w-[450px] sm:text-right sm:text-xl block gap-1 text-base text-black'>
              <p>Preencha o formulário ou entre</p>
              <p>em contato direto conosco</p>
            </label>
            
          </label>
        </>
        <>
          <content className='sm:flex'>
            <>
              <div className='sm:w-2/4 my-4 sm:space-y-8'>
                <Form/>
              </div>
            </>
            <>
              <div className='sm:justify-between sm:items-end sm:text-right flex flex-col text-center items-center  sm:w-2/4 my-10'>
                <article className='sm:space-y-2'>
                  <p className='text-black sm:text-5xl text-3xl'>55 51 23130093</p>
                  <p className='text-black sm:text-xl text-md'>gabriela@suden-rs.com.br</p>
                  <p className='text-black-700 sm:text-xl text-md'>
                    <p>Rua Tomaz Flores 191</p>
                    <p>Porto Alegre, Brasil</p>
                  </p>
                </article>
                <div className='sm:justify-items-end grid justify-items-center text-lg text-black-700'>
                  <a href='https://br.linkedin.com/likedin' target='blank' className='w-fit flex items-center gap-2 grayscale hover:grayscale-0 transition duration-150 hover:ease-out'>
                    <label className='cursor-pointer hover:text-linkedin'>Linkedin</label>
                    <Linkedin/>
                  </a>
                  <a href='https://wa.me/5551999673527' target='blank' className='w-fit flex items-center gap-2 grayscale hover:grayscale-0 transition duration-150 hover:ease-out'>
                    <label className='cursor-pointer hover:text-green'>WhatsApp</label>
                    <Whatsapp/>
                  </a>
                </div>
              </div>
            </>
          </content>
        </>
      </section>
    </>
  )
}

export default Contact;