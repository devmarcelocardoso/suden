import { Icon } from "@iconify/react";

function Title(props){
  return(
    <>
      <h1 className='flex items-center gap-2 text-green'>
        <Icon icon={props.icon} height='20'/>
        <label className='sm:text-2xl text-xl'>{props.title}</label>
      </h1>
    </>
  )
}

export default Title;