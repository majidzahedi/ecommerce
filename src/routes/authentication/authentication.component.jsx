import SignUp from "../../components/sign-up-form/SignUpForm.component";
import LogIn from "../../components/sign-in-form/SignInForm.component";
import { AuthContainer } from "./authentication.styles";
const Authentication = () => {
  return (
    <AuthContainer>
      <LogIn />
      <SignUp />
    </AuthContainer>
  );
};

export default Authentication;
