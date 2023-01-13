
export const postUserValidate = (body : any) => {
    const {email} = body
  
    const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailValidRegex)){
        return false
    }
    return true
}   

