import { useState } from "react";
import Component from "../segments/areas/component";
import Network from "../segments/areas/network";
import Industry from "../segments/areas/industry";
import Home from "../segments/areas/home";
import Hospital from "../segments/areas/hospital";
import Button from "../buttons/segments";

function Segments(){
  const [data, setData] = useState(<Component/>)

  return(
    <>
      <div className='flex gap-8'>
        <>
          <div className='flex flex-col'>
            <>
              <Button
                onClick={() => setData(<Component/>)}
                title='Componentes'
                icon='iconoir:electronics-chip'
              />
            </>
            <>
              <Button
                onClick={() => setData(<Network/>)}
                title='Redes'
                icon='iconoir:www'
              />
            </>
            <>
              <Button
                onClick={() => setData(<Industry/>)}
                title='Indústria'
                icon='iconoir:industry'
              />
            </>
            <>
              <Button
                onClick={() => setData(<Home/>)}
                title='Residencial'
                icon='iconoir:home-alt'
              />
            </>
            <>
              <Button
                onClick={() => setData(<Hospital/>)}
                title='Hospital'
                icon='iconoir:hospital'
              />
            </>
          </div>
        </>
        <>
          <article className='sm:w-[384px]'>
            {data}
          </article>
        </>
      </div>
    </>
  )
}

export default Segments;