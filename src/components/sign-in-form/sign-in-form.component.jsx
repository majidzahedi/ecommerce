import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { logIn as logInReducer } from "../../features/user/userSlice";
import { SIGNIN } from "../../apollo/mutations";

import "./sign-in-form.styles.scss";

const defaultFormFeild = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [signIn, { reset }] = useMutation(SIGNIN);
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
      onCompleted: ({ signIn }) => {
        setFormFeild(defaultFormFeild);
        dispatch(logInReducer({ ...signIn }));
      },
    });
  };

  return (
    <div className="sign-in-container">
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

        <div className="buttons-container">
          <Button type="submit">Log In</Button>
          <Button type="button" buttonType="google">
            Forgot Password!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
