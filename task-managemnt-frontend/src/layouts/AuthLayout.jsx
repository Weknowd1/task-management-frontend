import "../styles/auth.css";
import logo from "../assets/lemonpay.png";


const AuthLayout = ({ title, children }) => {
  return (
    <div className="auth-bg">
      <img src={logo} alt="logo" className="auth-logo" />

      <div className="auth-left">
        <h1>
          Join 1000+ Businesses<br />
          <span>Powering Growth</span><br />
          with Lemonpay!
        </h1>
      </div>

      <div className="auth-right">
        <h2>{title}</h2>
        <p>Your gateway to seamless transactions and easy payments.</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
