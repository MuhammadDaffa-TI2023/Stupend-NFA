
import React, { useState, useEffect } from "react";
import api from "../../api/axios"; 

const AuthorPage = () => {
  const [authors, setAuthors] = useState([]);
  const [nama, setNama] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoading(false);
      })
      .catch((err) => console.error("Gagal ambil author:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/authors", { nama, bio });
      setAuthors([...authors, res.data]);
      setNama("");
      setBio("");
    } catch (err) {
      console.error("Gagal tambah author:", err.response?.data || err);
      alert("Gagal menambahkan author!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">✍️ Manajemen Author</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Tambah Author Baru</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama Author"
              required
            />
            <textarea
              className="form-control mb-2"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio singkat"
            />
            <button type="submit" className="btn btn-success">
              Tambah Author
            </button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Daftar Author</h5>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Bio</th>
                </tr>
              </thead>
              <tbody>
                {authors.length ? (
                  authors.map((a, i) => (
                    <tr key={a.id}>
                      <td>{i + 1}</td>
                      <td>{a.nama}</td>
                      <td>{a.bio}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center text-muted">
                      Belum ada data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
