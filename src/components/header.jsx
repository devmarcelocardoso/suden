import { Icon } from '@iconify/react';
import logo from '../style/images/logo.svg'
import Secondary from './buttons/secondary';

function Header(){
  return(
    <header className='flex justify-between items-center'>
      <img src={logo} className='sm:w-56 w-32' alt='Suden Representações'/>
      <Secondary value='Contato' className='hover:bg-black hover:text-black-100'/>
      <Icon className='sm:hidden block' icon='iconoir:menu' color='#000' height='30' />
    </header>
  )
}

export default Header;