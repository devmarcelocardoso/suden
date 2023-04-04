function Images(props){
  return(
    <a href={props.href} target='blank'>
      <img src={props.src} alt={props.alt} className='hidden sm:block grayscale transition duration-300 hover:ease-in hover:grayscale-0' />
    </a>
  )
}

export default Images;