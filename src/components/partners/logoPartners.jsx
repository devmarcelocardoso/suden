function LogoPartners({logos}){
  return(
    <>
      <section className='h-48'>
        <div className='flex items-center relative'>
          <div className='sm:flex sm:justify-center gap-16 py-10 w-full absolute top-0 sm:overflow-auto overflow-x-scroll whitespace-nowrap bg-black-500 bg-opacity-20 backdrop-blur-xs'>
            { logos?.map((logo, index) => (
              <span key={index} className='inline-block sm:px-0 px-10 grayscale transition duration-300 hover:ease-in hover:grayscale-0 active:grayscale-0'>{logo.url}</span>
            )) }
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoPartners;