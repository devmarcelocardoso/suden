import { React } from 'react';
import homeBg from '../style/images/home-bg.svg'
import Index from './segments/index';
import Primary from '../components/buttons/primary'

function Home(){
  return(
    <>
      <section className='flex justify-between gap-4'>
        <>
          <main className='flex flex-col gap-6 w-[616px]'>
            <h1 className='sm:text-6xl text-4xl text-green font-bold'>Lorem ipsum dolor</h1>
            <p className='sm:text-gl text-base text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque placerat purus ac mollis. Etiam iaculis auctor dui sed tincidunt. Ut vel dolor erat. Praesent imperdiet vehicula congue. In suscipit Nunc aliquet efficitur lacus, sed malesuada nibh fringilla eget. Suspendisse.</p>
          </main>
        </>
        <img src={homeBg} className='w-64 sm:block hidden' alt='World network'/>
      </section>
      <section className='sm:flex justify-between items-center'>
        <Index/>
        <a href='https://wa.me/5551999673527' target='blank' className='sm:block hidden'>
          <Primary value='Faça parte da Suden'/>
        </a>
      </section>
    </>
  )
}

export default Home;