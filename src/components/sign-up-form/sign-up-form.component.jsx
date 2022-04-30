import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SIGNUP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

const defaultFormFeild = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signUp, { loading }] = useMutation(SIGNUP);
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
        onError: (error) => alert(error.message),
        onCompleted: () => setFormFeild(defaultFormFeild),
      });
    } else {
      alert("Password dose not match");
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have and account?</h2>
      <span>Sign up with Email and Password</span>
      <form className="form-feild" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          type="email"
          name="email"
          label="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          label="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {!!loading && <p>loading...</p>}
    </div>
  );
};

export default SignUp;
