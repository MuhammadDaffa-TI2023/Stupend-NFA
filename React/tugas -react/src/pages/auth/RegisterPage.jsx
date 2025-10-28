import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_admin: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Validasi sederhana
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Format email tidak valid";
    if (!form.password.trim()) newErrors.password = "Password wajib diisi";
    if (form.password !== form.password_confirmation)
      newErrors.password_confirmation = "Konfirmasi password tidak cocok";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", form);

      // Simpan token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMessage(res.data.message || "Registrasi berhasil!");

      // Redirect sesuai role
      if (res.data.user.is_admin) {
        navigate("/admin/genres"); // admin ke dashboard admin
      } else {
        navigate("/home"); // user biasa ke halaman utama
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setMessage("Registrasi gagal. Coba lagi nanti.");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-start vh-100 bg-light">
      <div className="card shadow p-4 mt-5" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Register Akun</h3>
        <form onSubmit={handleSubmit}>
          {/* Nama */}
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Masukkan nama"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Masukkan email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Masukkan password"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-3">
            <label className="form-label">Konfirmasi Password</label>
            <input
              type="password"
              className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`}
              value={form.password_confirmation}
              onChange={(e) =>
                setForm({ ...form, password_confirmation: e.target.value })
              }
              placeholder="Masukkan ulang password"
            />
            {errors.password_confirmation && (
              <div className="invalid-feedback">{errors.password_confirmation}</div>
            )}
          </div>

          {/* Checkbox Admin */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={form.is_admin}
              onChange={(e) => setForm({ ...form, is_admin: e.target.checked })}
              id="is_admin"
            />
            <label className="form-check-label" htmlFor="is_admin">
              Daftar sebagai admin
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Daftar
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-3 ${
              message.toLowerCase().includes("berhasil") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <hr />
        <p className="text-center">
          Sudah punya akun? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
