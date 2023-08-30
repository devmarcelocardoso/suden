function Input(props){
  return(
    <input type='text'
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      maxLength={props.maxLength}
      className='px-4 py-2 w-full text-lg bg-black-120 placeholder:text-black-500 focus:outline-none focus:ring-black-700 focus:ring-1'
    />
  )
}

export default Input;