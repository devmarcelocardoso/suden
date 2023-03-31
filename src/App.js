import logo from './style/images/logo.svg'

function App() {
  return (
    <div className='m-4 font-doppio grid grid-rows-2 items-between'>
      <>
        <img src={logo} alt="Suden Representações LTDA"/>
      </>
      <>
        <>
          <b className='text-5xl text-black-700'>
            <p>Seja bem vindo a</p>
            <p>Suden Representações</p>
          </b>
        </>
        <p className='text-3xl'>Nosso novo site está em construção</p>
      </>
    </div>
  );
}

export default App;
