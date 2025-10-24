// src/pages/Admin/GenrePage.jsx
import React, { useState, useEffect } from "react";
import api from "../../api/axios"; // ✅ path diperbaiki

const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/genres")
      .then((res) => {
        setGenres(res.data);
        setLoading(false);
      })
      .catch((err) => console.error("Gagal ambil genre:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/genres", { nama, deskripsi });
      setGenres([...genres, res.data]);
      setNama("");
      setDeskripsi("");
    } catch (err) {
      console.error("Gagal tambah genre:", err.response?.data || err);
      alert("Gagal menambahkan genre!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📚 Manajemen Genre</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Tambah Genre Baru</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama genre"
              required
            />
            <textarea
              className="form-control mb-2"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Deskripsi genre"
            />
            <button type="submit" className="btn btn-primary">
              Tambah Genre
            </button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Daftar Genre</h5>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {genres.length ? (
                  genres.map((g, i) => (
                    <tr key={g.id}>
                      <td>{i + 1}</td>
                      <td>{g.nama}</td>
                      <td>{g.deskripsi}</td>
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

export default GenrePage;
