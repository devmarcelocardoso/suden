import { Icon } from "@iconify/react";

function Button(props){
  return(
    <span className='flex justify-end py-2 text-black-500 border-gray-300'>
      <button
        className='flex items-center gap-1 hover:text-green'
        onClick={props.onClick}
        onChange={props.onChange}
      >
        <label className='font-light sm:text-lg sm:block hidden'>{props.title}</label>
        <Icon icon={props.icon} height='20'/>
      </button>
    </span>
  )
}

export default Button;