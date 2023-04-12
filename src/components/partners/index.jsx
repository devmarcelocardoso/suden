import Secondary from "../buttons/secondary";
import Carousel from "./carousel";

function Partners(){

  return(
    <>
      <section id='partners' className='flex flex-col justify-center sm:h-screen py-4 partners-bg'>
        <section className='sm:space-y-20 space-y-6'>
          <>
            <main className='bg-yellow px-4 py-2'>
              <div className='flex justify-between items-center'>
                <>
                  <label>
                    <h1 className='sm:text-3xl text-xl text-black font-bold'>Parceiros</h1>
                    <p className='sm:text-xl text-base text-black'>Empresas ao redor do mundo</p>
                  </label>
                </>
                <a href='#contact' className='sm:block hidden'>
                  <Secondary value='Fale conosco' className='block border hover:bg-black hover:text-yellow'/>
                </a>
              </div>
            </main>
          </>
          <Carousel/>
        </section>
      </section>
    </>
  )
}

export default Partners;