
export const postUserValidate = (body : any) => {
    const {email} = body
    const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailValidRegex)) return false
    return true
}   

export const loginValidate = (body : any) => {
    const {email} = body
    const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailValidRegex)) return false
    return true
}   

export const updateUserValidate = (body : any) => {
    const {first_name,last_name} = body
    if(!first_name || !last_name)  return false
    if (typeof first_name !== 'string')  return false
    if (typeof last_name !== 'string')  return false
    return true
}   

