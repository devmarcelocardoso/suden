import Title from "../title";

function Home(){
  return(
    <>
      <section className='flex flex-col space-y-4'>
        <Title
          title='Residencial'
          icon='iconoir:home-alt'
        />
        <p>Curabitur ultrices pulvinar sapien ac interdum. Donec id bibendum neque, at rhoncus ipsum. Nunc placerat ullamcorper consequat. Aenean dolor nisi, tincidunt tincidunt efficitur sit amet, ultrices at nisl. Suspendisse eros metus, dapibus eu diam at, sollicitudin tristique sapien. Morbi mattis.</p>
      </section>
    </>
  )
}

export default Home;