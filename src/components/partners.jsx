import Secondary from "./buttons/secondary";
import Images from "./images";
// import partnersBg from "../style/images/partners-bg.svg";
import dewertOkin from "../style/images/partners/dewertOkin.svg";
import seccon from "../style/images/partners/seccon.svg";
import techno from "../style/images/partners/techno.svg";
import greatStar from "../style/images/partners/greatStar.svg";
import pmr from "../style/images/partners/pmr.svg";

function Partners(){
  return(
    <>
      <section className='h-screen partners-bg flex flex-col justify-center space-y-16 '>
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
                <a href='https://wa.me/5551999673527' target='blank' className='sm:block hidden'>
                  <Secondary value='Fale conosco' className='border hover:bg-black hover:text-yellow'/>
                </a>
              </div>
            </main>
          </>
          <>
            <content className='flex justify-center items-center gap-8'>
              <Images
                href='https://phoenixmecano.com.br/a-empresa/'
                src={dewertOkin}
                alt='Dewert Okin'
              />
              <Images
                href='https://www.seccon.com.br/a-seccon/'
                src={seccon}
                alt='Seccon'
              />
              <Images
                href='https://www.techno.it/company'
                src={techno}
                alt='Techno'
              />
              <Images
                href='http://www.greatstartech.com/en/About/About_Us/'
                src={greatStar}
                alt='Great Star Technology'
              />
              <Images
                href='https://www.pmrresistencias.com.br/somos-pmr.php'
                src={pmr}
                alt='PMR Resistências'
              />
            </content>
          </>
        </section>
      </section>
    </>
  )
}

export default Partners;