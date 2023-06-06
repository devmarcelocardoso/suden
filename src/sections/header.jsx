import { ReactComponent as Logotipo } from '../style/images/logotipo.svg'

function Header(){


  return(
    <>
      <header id='header' className='flex justify-between items-end'>
        <>
          <Logotipo className='sm:w-28 w-20'/>
          <a href='#contact' className='sm:text-lg text-md text-black-700 hover:text-black'>Contato</a>
        </>
      </header>
    </>
  )
}

export default Header;