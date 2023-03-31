import logo from './style/images/logo.svg'

function App() {
  return (
    <div className='m-4 font-doppio grid gap-20'>
      <div className='flex justify-between items-center'>
        <span><img src={logo} alt="Suden Representações LTDA"/></span>
        <span className='bg-green-500 p-2'>Ambiente de homologação</span>
      </div>
      <>
        <>
          <span className='text-5xl text-black-700'>
            <b>
              <p>Seja bem vindo a</p>
              <p>Suden Representações</p>
            </b>
            <p className='text-3xl text-black'>Nosso novo site está em construção</p>
          </span>
        </>
      </>
    </div>
  );
}

export default App;
