import { Icon } from '@iconify/react';
import logo from '../style/images/logo.svg'
import Secondary from './buttons/secondary';
import { useState } from 'react';
import MenuMobile from './menuMobile';

function Header(){
  const [show, setShow] = useState(false)

  return(
    <>
      <header id='header' className='flex justify-between items-center'>
        <>
          <img src={logo} className='sm:w-40 w-32' alt='Suden Representações'/>
          <a href='#contact' className='hidden sm:block'>
            <Secondary value='Contato' className='block border hover:bg-black hover:text-black-100'/>
          </a>
          <content className='sm:hidden text-black-100 transition ease-in-out duration-300'>
            <span onClick={() => setShow(!show)}>
              { show ?
                <div className='w-full h-full bg-black absolute top-0 left-0 flex'>
                  <MenuMobile/>
                  <Icon
                    icon='iconoir:cancel'
                    color='#EAE9E9'
                    height='30'
                    className='absolute right-2 top-2'
                  />
                </div>
              : 
                <Icon icon='iconoir:menu' color='#242021' height='30' />
              }
            </span>
          </content>
        </>
      </header>
    </>
  )
}

export default Header;