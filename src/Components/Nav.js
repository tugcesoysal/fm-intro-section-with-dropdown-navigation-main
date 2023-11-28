import Features from "./Features";
import Company from "./Company";

export default function Nav() {
  return (
    <div className="nav">
      <Features />
      <Company />
      <p className="careers_header">Careers</p>
      <p className="about_header">About</p>
      <button className="login-btn">Login</button>
      <button className="register-btn">Register</button>
    </div>
  );
}
