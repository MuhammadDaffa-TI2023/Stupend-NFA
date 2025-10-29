import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../../api/axios";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Format email tidak valid";
    if (!form.password.trim()) newErrors.password = "Password wajib diisi";
    return newErrors;
  };

 
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await api.post("/login", form);

      // Simpan token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage("Login berhasil!");

      // Redirect sesuai role
      if (res.data.user.is_admin) navigate("/admin");
      else navigate("/");
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Login gagal!");
    }
  };

  
  return (
    <div className="d-flex justify-content-center align-items-start vh-100 bg-light">
      <div className="card shadow p-4 mt-5" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login Akun</h3>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Masukkan email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Masukkan password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              style={{ marginRight: "10px" }}
            >
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </button>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-3 ${
              message.toLowerCase().includes("berhasil")
                ? "alert-success"
                : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <hr />
        <p className="text-center">
          Belum punya akun? <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
