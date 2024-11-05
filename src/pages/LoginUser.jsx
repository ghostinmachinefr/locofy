import InputFields from "../components/InputFields";
import "./LoginUser.css";

const LoginUser = () => {
  return (
    <div className="login-user">
      <img className="image-1591-icon" alt="" src="/image-1591@2x.png" />
      <div className="auth">
        <InputFields />
      </div>
      <div className="content">
        <img className="content-child" alt="" src="/group-8866.svg" />
        <div className="view-attendence1">View Attendence</div>
      </div>
    </div>
  );
};

export default LoginUser;
