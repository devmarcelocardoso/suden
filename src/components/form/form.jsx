import { useEffect, useState } from "react";
import Input from "./input";
import Primary from "./button";
import SendMail from "../../api/sendMail";
import Message from "../message";

function Form(){
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({
    message: '',
    type: ''
  })

  const [statusButton, setStatusButton] = useState(false)

  const validateEmail = (e) => {
    // Expressão regular para validar o formato do e-mail
    const regex = getValidatorEmail();
    if(!regex.test(e?.target?.value)){
      return setStatus({
        message: 'E-mail inválido',
        type: 'text-red'
      })
    }
    return setStatus({
      message: '',
      type: ''
    })
  };

  const getValidatorEmail = () => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  }

  function phoneMask(valor) {
    // Remove todos os caracteres que não são números.
    const numeros = valor?.replace(/[^\d]/g, '');
  
    // Formata o número de telefone no formato (DD) NNNNN-NNNN ou NNNN-NNNN, dependendo do tamanho.
    if (numeros?.length === 11) {
      return `(${numeros?.slice(0, 2)}) ${numeros?.slice(2, 7)}-${numeros?.slice(7)}`;
    } else if (numeros?.length === 11) {
      return `${numeros?.slice(0, 4)}-${numeros?.slice(4)}`;
    } else {
      return numeros;
    }
  }

  const getValidatorPhone = () => {
    return /\(\d{2}\)\s{1}\d{5}-\d{4}/;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const regexEmail = getValidatorEmail()
    const regexPhone = getValidatorPhone()
    if(fields?.name && regexEmail.test(fields?.email) && regexPhone.test(fields?.phone) && fields?.subject && fields?.message){
      setStatusButton(true)
      setStatus({
        message: <Message icon='iconoir:restart' className='animate-spin' message='Enviando...'/>,
        type: 'text-black'
      })
      SendMail.newLead(fields).then(response => {
        console.log(response)
        if(response?.data?.status === 200){
          setStatusButton(false)
          return setStatus({
            message: <Message icon='iconoir:check-circle' message='Mensagem enviada com sucesso!'/>,
            type: 'text-green'
          })
        }
      }).catch((e) => {
        setStatusButton(false)
        setStatus({
          message: <Message icon='iconoir:warning-circle' message='Não foi possível enviar mensagem'/>,
          type: 'text-red'
        })
      })
    } else {
      return setStatus({
        message: <Message icon='iconoir:warning-circle' message='Revise as informações'/>,
        type: 'text-red'
      })
    }
  }

  useEffect(() => {
    if(fields.phone && fields.email){  
      setStatusButton(false)
    }
  }, [fields.email, fields.phone])

  return(
    <>
      <form className='flex flex-col items-center gap-6' onSubmit={handleSubmit}>
        <div className='flex sm:flex-row flex-col items-center gap-6 w-full relative'>
          <Input
            placeholder='Nome'
            value={fields?.name}
            onChange={(e) => {
              setFields({
                ...fields,
                name: e?.target?.value
              });
            }}
          />
          <span className='sm:ml-3 ml-0 absolute sm:-top-6 top-12 sm:left-2/4 left-0 text-sm text-black'>Formato: 11999999999</span>
          <Input
            placeholder='Telefone'
            value={fields?.phone}
            onChange={(e) => {
              setFields({
                ...fields,
                phone: phoneMask(e?.target?.value)
              });
            }}
            maxLength='11'
          />
        </div>
        <Input
          placeholder='E-mail'
          value={fields?.email}
          onBlur={validateEmail}
          onChange={(e) => {
            setFields({
              ...fields,
              email: e?.target?.value
            });
          }}
        />
        <Input
          placeholder='Assunto'
          value={fields?.subject}
          onChange={(e) => {
            setFields({
              ...fields,
              subject: e?.target?.value
            });
          }}
        />
        <textarea
          placeholder='Mensagem'
          value={fields?.message}
          onChange={(e) => {
            setFields({
              ...fields,
              message: e?.target?.value
            });
          }}
          className='px-4 py-2 w-full text-lg bg-black-120 placeholder:text-black-500 focus:outline-none focus:ring-black-700 focus:ring-1'
        />
        <>
          <div className='sm:flex justify-between items-center sm:space-y-0 space-y-6 w-full'>
            <div>
              { status?.message ?
                <span className={`${status?.type}`}>{ status?.message }</span>
              :
                null
              } 
            </div>
            <div>
              <Primary value="Enviar" disabled={statusButton}/>
            </div>
          </div>
        </>
      </form>
    </>
  )
}

export default Form;