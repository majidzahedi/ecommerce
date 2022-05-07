import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/FormInput.component";
import Button from "../button/button.component";

import { logIn as logInReducer } from "../../features/user/userSlice";
import { SIGNUP } from "../../apollo/mutations";

import "./sign-up-form.styles.scss";

const defaultFormFeild = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signUp, { reset }] = useMutation(SIGNUP);
  const dispatch = useDispatch();

  const [formField, setFormFeild] = useState(defaultFormFeild);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formField, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      signUp({
        variables: { name: displayName, email, password },
        onError: ({ message }) => alert(message) || reset(),
        onCompleted: ({ signUp }) => {
          setFormFeild(defaultFormFeild);
          dispatch(logInReducer({ ...signUp }));
        },
      });
    } else {
      alert("Password dose not match");
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with Email and Password</span>
      <form className="form-feild" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display name"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
