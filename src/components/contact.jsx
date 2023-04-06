import Form from "./form/form";
import linkedin from "../style/images/linkedin.svg"


function Contact(){
  return(
    <>
      <section id='contact' className='sm:flex flex-col gap-8'>
        <>
          <label className='sm:flex justify-between items-start'>
            <h1 className='sm:text-3xl text-xl text-black font-bold'>Envier sua mensagem</h1>
            <label className='sm:w-[450px] sm:text-right sm:text-xl text-base text-black'>
              <p>Lorem ipsum dolor</p>
              <p>amet consectetur</p>
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
              <div className='sm:flex flex-col justify-between items-end sm:text-right text-center sm:w-2/4 space-y-16 my-10'>
                  <article className='sm:space-y-2'>
                    <p className='text-black sm:text-5xl text-4xl'>55 51 23130093</p>
                    <p className='text-black text-xl'>gabriela@suden-rs.com.br</p>
                    <p className='text-black-700 text-xl'>
                      <p>Rua Tomaz Flores 191</p>
                      <p>Porto Alegre, Brasil</p>
                    </p>
                  </article>
                <a href='https://br.linkedin.com/likedin' target='blank' className='flex justify-center items-center gap-2 grayscale hover:grayscale-0 transition duration-150 hover:ease-out'>
                  <label className='text-xl text-black-700 cursor-pointer'>Suden</label>
                  <img src={linkedin} className='sm:w-6' alt='Suden Representações'/>
                </a>
              </div>
            </>
          </content>
        </>
      </section>
    </>
  )
}

export default Contact;