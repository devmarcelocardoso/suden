function Secondary(props){
  return(
    <span className={props.className}>
      <button className='hidden sm:block py-2 px-4 text-sm transition duration-500 hover:ease-out'>{props.value}</button>
    </span>
  )
}

export default Secondary;