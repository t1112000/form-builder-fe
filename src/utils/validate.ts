interface SignInValidate {
  email: string;
  password: string;
}

interface SignUpValidate {
  email: string;
  password: string;
  confirm_password: string;
}

interface ForgotPasswordValidate {
  email: string;
}

interface ResetPasswordValidate {
  password: string;
  confirm_password: string;
}

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const signInValidate = (values: SignInValidate) => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = "Please enter your email";
  }

  if (!values.password) {
    errors.password = "Please enter your password";
  }

  return errors;
};

export const signUpValidate = (values: SignUpValidate) => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = "Please enter your email";
  } else {
    if (!isEmail(values.email)) {
      errors.email = "Email invalid";
    }
  }

  if (!values.password) {
    errors.password = "Please enter your password";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please confirm your password";
  }

  if (values.password !== values.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
};

export const forgotPasswordValidate = (values: ForgotPasswordValidate) => {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = "Please enter your email";
  }

  return errors;
};

export const resetPasswordValidate = (values: ResetPasswordValidate) => {
  const errors: Record<string, string> = {};

  if (!values.password) {
    errors.password = "Please enter your password";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please confirm your password";
  }

  if (values.password !== values.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
};
