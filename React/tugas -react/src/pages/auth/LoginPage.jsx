import api from "../../api/axios"; // ✅ gunakan instance api, bukan axios langsung
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ gunakan api.post agar pakai baseURL dari axios.js
      const response = await api.post("/login", { email, password });

      console.log("Response dari backend:", response.data);

      // ✅ Simpan token dan user ke localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login berhasil!");

      // ✅ Arahkan ke halaman sesuai roleb
      if (response.data.user.role === "admin") {
        window.location.href = "/admin/genres";
      } else {
        window.location.href = "/user/dashboard";
      }
    } catch (error) {
      console.error("Error login:", error.response?.data || error);
      alert(error.response?.data?.message || "Login gagal!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
