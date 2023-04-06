function Mobile(props){
  return(
    <span className='grid justify-items-start'>
      <a href={props.href}>
        <button className='py-2 px-4 text-3xl transition duration-500 hover:ease-out'>{props.value}</button>
      </a>
    </span>
  )
}

export default Mobile;