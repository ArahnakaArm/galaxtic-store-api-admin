export const updateCategoryValidate = (body : any) => {
    const {first_name,last_name} = body
    if(!first_name || !last_name)  return false
    if (typeof first_name !== 'string')  return false
    if (typeof last_name !== 'string')  return false
    return true
}   