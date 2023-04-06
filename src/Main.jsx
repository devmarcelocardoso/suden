import Header from "./components/header";
import Home from "./components/home";
import Partners from "./components//partners/index";
import Contact from "./components/contact";
import Footer from "./components/footer";

function Main(){
  return(
    <>
      <main className='mx-2.5 my-1.5 sm:mx-10 sm:my-5 space-y-6'>
        <Header/>
        <Home/>
        <Partners/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default Main;