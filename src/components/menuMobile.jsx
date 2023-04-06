import Mobile from "./buttons/mobile";

function MenuMobile(props){
  return(
    <>
      <section>
        <Mobile value='Contato' href='#contact'/>
        <Mobile value='Segmentos' href='#segments'/>
        <Mobile value='Parceiros' href='#partners'/>
        <a
          href='https://wa.me/5551999673527'
          target='blank'
          className='flex items-center w-fit m-4 px-4 py-2 text-2xl bg-green-500 text-black active:bg-green'
        >
          Faça parte da Suden
        </a>
      </section>
    </>
  )
}

export default MenuMobile;