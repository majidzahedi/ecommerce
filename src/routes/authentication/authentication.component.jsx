import SignUp from "../../components/sign-up-form/sign-up-form.component";
import LogIn from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="auth-container">
      <LogIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
