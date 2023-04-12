function Mobile(props){
  return(
    <span>
      <a href={props.href}>
        <button className='transition duration-500 hover:ease-out'>{props.value}</button>
      </a>
    </span>
  )
}

export default Mobile;