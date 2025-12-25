
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // ✅ AUTO LOGIN IF TOKEN EXISTS
  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");

    if (token) {
      window.location.href = "/tasks";
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const res = await api.post("/api/auth/login", { email, password });
    if (remember) {
      localStorage.setItem("token", res.data.token);
    } else {
      sessionStorage.setItem("token", res.data.token);
    }

    window.location.href = "/tasks";
  };

  return (
    <AuthLayout title="Welcome Login System">
      <form className="auth-form" onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="auth-row">
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <Link to="/register" className="auth-link">
            Sign Up
          </Link>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </AuthLayout>
  );
};

export default Login;


