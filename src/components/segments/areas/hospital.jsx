import Title from "../title";

function Hospital(){
  return(
    <>
      <section className='flex flex-col space-y-4'>
        <Title
          title='Hospitalar'
          icon='iconoir:hospital'
        />
        <p>Aliquam sagittis volutpat pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vitae massa scelerisque, posuere odio ac, efficitur felis. Praesent convallis tellus ut ante aliquam, in sagittis sem fringilla. Nullam varius tellus arcu.</p>
      </section>
    </>
  )
}

export default Hospital;