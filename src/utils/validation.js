import validator from 'validator'

export const validateName = (name) => {
  if (!name) return `Name can't be empty`
  if (name.length < 3) return `Name must be atleast 3 characters long`

  return false
}

export const validateEmail = (email) => {
  if (!validator.isEmail(email)) return 'Email is not valid'

  return false
}
export const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 8) return 'Password must be atleast 8 characters long'

  return false
}
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Confirm password is required'
  if (confirmPassword.length < 8)
    return 'Confirm password must be atleast 8 characters long'
  if (password !== confirmPassword)
    return `Password and confirm password doesn't match`

  return false
}

// export const
