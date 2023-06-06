function Heading({ level, children }){
  switch(level){
    case 1:
      return <h1 className='sm:text-6xl text-3xl text-green font-bold'>{children}</h1>;
    case 2:
      return <h2 className='sm:text-3xl text-xl text-black font-bold'>{children}</h2>;
    case 3:
      return <h3 className='sm:text-2xl text-lg font-bold'>{children}</h3>;
    default:
      throw Error('Nível desconhecido: ' + level);
  }
}

export default Heading;