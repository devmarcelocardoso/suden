import axios from "axios";

const SendMail = {
  newLead: (obj) => {
    return axios.get(`${process.env.REACT_APP_URL_API}index.php?email=${obj.email}&name=${obj.name}&phone=${obj.phone}&subject=${obj.subject}&message=${obj.message}`, {
    })
  }
}

export default SendMail;