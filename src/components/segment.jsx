import { Icon } from "@iconify/react";
import Heading from "./heading";

function Segment(props){
  return(
    <>
      <section className='inline-block sm:flex sm:mr-0 mr-4'>
        <>
          <div className='flex justify-center items-center sm:w-56 sm:h-32 w-44 h-32 text-green bg-black-120 hover:bg-black hover:text-black-100'>
            <>
              <div className='flex flex-col items-start gap-2'>
                <Icon icon={props.icon} className='h-8 w-8'/>
                <Heading level={3}>{props.title}</Heading>
              </div>
            </>
          </div>
        </>
      </section>
    </>
  )
}

export default Segment;