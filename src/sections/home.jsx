import { React } from 'react';
import { ReactComponent as HomeBg } from '../style/images/home-bg.svg'
import Heading from '../components/heading';
import Segments from './segments';
import Primary from '../components/form/button';

function Home(){
  return(
    <>
      <section id='home' className='flex justify-between items-start'>
        <>
          <article className='flex flex-col space-y-8'>
            <div className='flex flex-col justify-center gap-0 sm:gap-6 sm:w-[750px]'>
              <Heading level={1}>Foco e experiência</Heading>
              <p className='sm:text-lg text-sm text-black'>A Suden Representações foi criada em 2019, com foco e experiência no atendimento do segmento industrial, de produtos eletroeletrônicos e eletromecânicos e assessoramento técnico e comercial para os clientes. Com o objetivo de sermos referência no mercado do Rio Grande do Sul, prestamos esse serviço junto de nossos parceiros.</p>
            </div>
            <div className='sm:hidden block'>
              <a href='https://wa.me/5551999673527' target='blank'>
                <Primary value='Faça parte da Suden'/>
              </a>
            </div>
            <Segments/>
          </article>
        </>
        <HomeBg className='sm:block hidden'/>
        
      </section>
    </>
  )
}

export default Home;