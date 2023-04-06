import Input from "./input";
import Primary from "../buttons/primary";

function Form(){
  return(
    <>
      <form className='flex flex-col items-center gap-6'>
        <Input placeholder='Nome e Sobrenome'/>
        <Input placeholder='Cargo'/>
        <Input placeholder='Empresa'/>
        <Input placeholder='Como podemos te ajudar?'/>
        <>
          <content className='sm:w-full sm:flex justify-between items-center sm:space-y-0 space-y-6'>
            <div className='sm:flex items-center space-x-2'>
              <input type='radio'/>
              <label>Concordo com os termos de privacidade</label>
            </div>
            <Primary value='Enviar'/>
          </content>
        </>
      </form>
    </>
  )
}

export default Form;