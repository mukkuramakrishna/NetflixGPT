export const checkValidData = (email, password) => {
  const errors = {
    email: "",
    password: "",
  };
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) {
    errors.email = "Email is not Valid";
  }
  if (!validatePassword) {
    errors.password = "Password is not valid";
  }
  return errors;
};
