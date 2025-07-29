export const checkValidData = (email, password) => {

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$.{8,}$/.test(password)

  if(!isEmailValid) return "Email ID not valid"
  if(!isPasswordValid) return "Password should contain atleast one uppercase, special symbol & number"

  return null
}
