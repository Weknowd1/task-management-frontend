import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import api from "../services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", { email, password });
    window.location.href = "/login";
  };

  return (
    <AuthLayout title="Welcome Sign Up System">
      <form onSubmit={submit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </AuthLayout>
  );
};

export default Register;
