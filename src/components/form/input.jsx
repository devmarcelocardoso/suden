function Input(props){
  return(
    <input type='text' placeholder={props.placeholder} className='w-full outline-none border border-black-500 px-4 py-2 text-xl placeholder:text-black-200'/>
  )
}

export default Input;