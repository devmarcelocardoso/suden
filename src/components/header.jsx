import { Icon } from '@iconify/react';
import { ReactComponent as Logotipo } from '../style/images/logotipo.svg'
import { useState } from 'react';
import MenuMobile from './menuMobile';

function Header(){
  const [show, setShow] = useState(false)

  return(
    <>
      <header id='header' className='flex justify-between items-center'>
        <>
          <Logotipo/>
          <a href='#contact' className='sm:block hidden text-black-700 hover:text-black'>Contato</a>
          <content className='sm:hidden text-black-100 transition ease-in-out duration-300'>
            <span onClick={() => setShow(!show)}>
              { show ?
                <div className='w-full h-full bg-black absolute top-0 left-0 right-0'>
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