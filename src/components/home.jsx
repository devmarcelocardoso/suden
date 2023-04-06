import { React } from 'react';
import homeBg from '../style/images/home-bg.svg'
import Primary from '../components/buttons/primary'
import Segments from './segments/index';

function Home(){
  return(
    <>
      <section id='home' className='h-fit flex justify-between gap-4'>
        <>
          <main className='flex flex-col justify-center gap-6 w-[620px]'>
            <h1 className='sm:text-6xl text-4xl text-green font-bold'>Lorem ipsum dolor</h1>
            <p className='sm:text-gl text-base text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque placerat purus ac mollis. Etiam iaculis auctor dui sed tincidunt. Ut vel dolor erat. Praesent imperdiet vehicula congue. In suscipit Nunc aliquet efficitur lacus, sed malesuada nibh fringilla eget. Suspendisse.</p>
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