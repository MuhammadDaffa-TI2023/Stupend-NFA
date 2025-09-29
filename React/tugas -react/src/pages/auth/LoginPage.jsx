import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-start vh-100 bg-light">
      <div className="card shadow p-4 mt-5" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <hr />

        <p className="text-center">
          Don’t have an account yet?{" "}
          <NavLink to="/register">Register</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
