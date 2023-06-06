function Primary(props){
  return(
    <button className='px-6 w-full sm:w-fit sm:text-lg text-sm py-3 bg-green-500 transition duration-300 hover:ease-linear hover:bg-green hover:text-black-100' disabled={props.disabled ?? false }>
      {props.value}
    </button>
  )
}

export default Primary;