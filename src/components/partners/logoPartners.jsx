function LogoPartners({logos}){
  return(
    <>
      <div className='sm:flex sm:justify-center gap-10 grid grid-rows-1 grid-flow-col'>
        { logos?.map(logo => (
          <span key={logo.id} className='w-max grayscale transition duration-300 hover:ease-in hover:grayscale-0'>{logo.url}</span>
        )) }
      </div>
    </>
  )
}

export default LogoPartners;