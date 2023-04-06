import Secondary from "../buttons/secondary";
import Carousel from "./carousel";

function Partners(){

  return(
    <>
      <section id='partners' className='h-screen partners-bg flex flex-col justify-center space-y-16 '>
        <section className='space-y-20'>
          <>
            <main className='bg-yellow px-8 py-4'>
              <div className='flex justify-between items-center'>
                <>
                  <label>
                    <h1 className='sm:text-3xl text-xl text-black font-bold'>Parceiros</h1>
                    <p className='sm:text-xl text-base text-black'>Lorem ipsum dolor amet</p>
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