import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/FormInput.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { logIn as logInReducer } from "../../features/user/userSlice";
import { LOGIN } from "../../apollo/mutations";

import { SignInContainer, ButtonContainer } from "./SignInForm.styles.jsx";

const defaultFormFeild = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [signIn, { reset }] = useMutation(LOGIN);
  const dispatch = useDispatch();

  const [formField, setFormFeild] = useState(defaultFormFeild);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formField, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn({
      variables: { email, password },
      onError: ({ message }) => alert(message) || reset(),
      onCompleted: ({ logIn }) => {
        setFormFeild(defaultFormFeild);
        dispatch(logInReducer({ ...logIn }));
      },
    });
  };

  return (
    <SignInContainer>
      <h2>Already have an account </h2>
      <span>Sign in with your email and password</span>
      <form className="form-feild" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          value={password}
          required
        />

        <ButtonContainer>
          <Button type="submit">Log In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue}>
            Forgot Password!
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default LogIn;
