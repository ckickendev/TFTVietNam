export const validateEmail = (
  email,
  message = "Your email is incorrect, please check again"
) => {
  const isValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return { isValid, message };
};

export const validatePassword = (
  password,
  message = "Your password is incorrect, please check again"
) => {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(password)) {
    return { isValid: true, message };
  }
  return { isValid: false, message };
};

export const validateNumber = (
  password,
  nameField 
) => {
  const message = `Your field "${nameField}" must be a number`;
  if(!/^[0-9]+$/.test(password)){
    return {isValid: false, message}
  }
  return {isValid: true, message}
};

export const errorEmptyInputObject = (value) => {
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      if (!value[key] && value[key] != "0") {
        return `Field "${key}" is cannot empty`;
      }
    }
  }
  return false;
};
