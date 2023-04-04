import Title from "../title";

function Component(){
  return(
    <>
      <section className='flex flex-col space-y-4'>
        <Title
          title='Componentes'
          icon='iconoir:electronics-chip'
        />
        <p>Donec rhoncus volutpat libero sed rhoncus. Proin porta suscipit lacinia. Fusce consequat viverra ex in mattis. Quisque eu massa semper, porta elit sit amet, pellentesque ligula. Morbi at eleifend justo. Nunc aliquet efficitur lacus, sed malesuada nibh fringilla eget. Suspendisse.</p>
      </section>
    </>
  )
}

export default Component;