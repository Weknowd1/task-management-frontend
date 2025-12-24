// import { useState } from "react";
// import AuthLayout from "../layouts/AuthLayout";
// import api from "../services/api";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     await api.post("/auth/register", { email, password });
//     window.location.href = "/login";
//   };

//   return (
//     <AuthLayout title="Welcome Sign Up System">
//       <form onSubmit={submit}>
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button>Sign Up</button>
//       </form>
//     </AuthLayout>
//   );
// };

// export default Register;
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import api from "../services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    await api.post("/auth/register", { email, password });
    window.location.href = "/login";
  };

  return (
    <AuthLayout title="Welcome Sign Up System">
      <form className="auth-form" onSubmit={submit}>
        {error && <p style={{ color: "#ffb4b4" }}>{error}</p>}

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

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Navigation row (same alignment as Login) */}
        <div className="auth-row">
          <span></span>

          <Link to="/login" className="auth-link">
            Sign In
          </Link>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </AuthLayout>
  );
};

export default Register;
