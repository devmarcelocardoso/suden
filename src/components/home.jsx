import { React } from 'react';
import homeBg from '../style/images/home-bg.svg'
import Primary from '../components/buttons/primary'
import Segments from './segments/index';

function Home(){
  return(
    <>
      <section id='home' className='h-fit flex justify-between gap-4'>
        <>
          <main className='flex flex-col justify-center sm:gap-6 gap-0 w-[620px]'>
            <h1 className='sm:text-6xl text-3xl text-green font-bold'>Foco e experiência</h1>
            <p className='sm:text-lg text-sm text-black'>A Suden Representações foi criada em 2019, com foco e experiência no atendimento do segmento industrial, de produtos eletroeletrônicos e eletromecânicos e assessoramento técnico e comercial para os clientes. Com o objetivo de sermos referência no mercado do Rio Grande do Sul na prestação desse serviço junto de nossos parceiros.
</p>
          </main>
        </>
        <img src={homeBg} className='w-64 sm:block hidden' alt='World network'/>
      </section>
      <section id='segments' className='sm:flex justify-between items-start'>
        <Segments/>
        <a href='https://wa.me/5551999673527' target='blank' className='sm:block hidden'>
          <Primary value='Faça parte da Suden'/>
        </a>
      </section>
    </>
  )
}

export default Home;