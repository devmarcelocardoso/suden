function Secondary(props){
  return(
    <span className={props.className}>
      <button className='hidden sm:block py-2 px-4 border text-lg'>{props.value}</button>
    </span>
  )
}

export default Secondary;