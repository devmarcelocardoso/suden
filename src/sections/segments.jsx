import Heading from '../components/heading';
import Segment from '../components/segment';

function Segments(){
  return(
    <>
      <section className='sm:space-y-6 space-y-2 h-48'>
        <div>
          <Heading level={2}>Segmentos</Heading>
          <p className='sm:text-lg text-sm'>Nossas principais áreas de atuação</p>
        </div>
        <div className='relative'>
          <div className='sm:flex sm:justify-start sm:gap-4 w-full absolute top-0 sm:overflow-auto overflow-x-scroll whitespace-nowrap'>
            <Segment icon='iconoir:industry' title='Indústrial' />
            <Segment icon='iconoir:home-alt' title='Residencial' />
            <Segment icon='iconoir:hospital' title='Hospitalar' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Segments;