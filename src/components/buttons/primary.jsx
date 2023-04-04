function Primary(props){
  return(
    <button className='sm:w-fit w-full py-3 px-6 mt-10 bg-green-500 text-lg transition duration-500 hover:ease-linear hover:bg-green hover:text-black-100'>
      {props.value}
    </button>
  )
}

export default Primary;