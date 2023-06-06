import { Icon } from "@iconify/react";

function Message(props){
  return(
    <>
      <div className='flex gap-2'>
        <Icon icon={props.icon} className={`w-5 h-5 ${props.className}`} />
        <p>{props.message}</p>
      </div>
    </>
  )
}

export default Message;