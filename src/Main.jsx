import Header from "./sections/header";
import Home from "./sections/home";
import Partners from "./sections/partners";
// import Contact from "./sections/contact";
import Footer from "./sections/footer";

function Main(){
  return(
    <>
      <main className='sm:px-10 sm:py-5 px-2.5 py-1.5 sm:space-y-10 space-y-6 bg-black-100'>
        <Header/>
        <Home/>
        <Partners/>
        {/* <Contact/> */}
      </main>
      <Footer/>
    </>
  )
}

export default Main;