import { useEffect, useState } from "react";
import api from "../../api/axios";

const DashboardPage = () => {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newGenre, setNewGenre] = useState({ nama: "", deskripsi: "" });
  const [newAuthor, setNewAuthor] = useState({ nama: "", email: "" });
  const [message, setMessage] = useState("");

  // Ambil data dari API Laravel
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const genreRes = await api.get("/genres");
      const authorRes = await api.get("/authors");

      setGenres(Array.isArray(genreRes.data.data) ? genreRes.data.data : []);
      setAuthors(Array.isArray(authorRes.data.data) ? authorRes.data.data : []);
    } catch (err) {
      console.error("Gagal ambil data:", err);
      setMessage("Gagal memuat data dari server.");
    }
  };

  // Tambah Genre
  const handleAddGenre = async (e) => {
    e.preventDefault();
    try {
      await api.post("/genres", newGenre);
      setMessage("✅ Genre berhasil ditambahkan!");
      setNewGenre({ nama: "", deskripsi: "" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menambah genre.");
    }
  };

  // Tambah Author
  const handleAddAuthor = async (e) => {
    e.preventDefault();
    try {
      await api.post("/authors", newAuthor);
      setMessage("✅ Author berhasil ditambahkan!");
      setNewAuthor({ nama: "", email: "" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menambah author.");
    }
  };

  // Hapus Genre
  const handleDeleteGenre = async (id) => {
    if (!confirm("Yakin hapus genre ini?")) return;
    try {
      await api.delete(`/genres/${id}`);
      setMessage("🗑️ Genre berhasil dihapus!");
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menghapus genre.");
    }
  };

  // Hapus Author
  const handleDeleteAuthor = async (id) => {
    if (!confirm("Yakin hapus author ini?")) return;
    try {
      await api.delete(`/authors/${id}`);
      setMessage("🗑️ Author berhasil dihapus!");
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menghapus author.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📊 Dashboard Admin</h2>
      {message && (
        <div className="alert alert-info py-2" role="alert">
          {message}
        </div>
      )}

      {/* === FORM GENRE === */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Tambah Genre</div>
        <div className="card-body">
          <form onSubmit={handleAddGenre} className="row g-2">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Genre"
                value={newGenre.nama}
                onChange={(e) =>
                  setNewGenre({ ...newGenre, nama: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Deskripsi"
                value={newGenre.deskripsi}
                onChange={(e) =>
                  setNewGenre({ ...newGenre, deskripsi: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* === TABEL GENRE === */}
      <div className="card mb-5">
        <div className="card-header fw-bold">Daftar Genre</div>
        <div className="card-body">
          {genres.length === 0 ? (
            <p className="text-muted">Belum ada genre.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((g) => (
                  <tr key={g.id}>
                    <td>{g.id}</td>
                    <td>{g.nama}</td>
                    <td>{g.deskripsi}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteGenre(g.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* === FORM AUTHOR === */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Tambah Author</div>
        <div className="card-body">
          <form onSubmit={handleAddAuthor} className="row g-2">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Author"
                value={newAuthor.nama}
                onChange={(e) =>
                  setNewAuthor({ ...newAuthor, nama: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="email"
                className="form-control"
                placeholder="Email Author"
                value={newAuthor.email}
                onChange={(e) =>
                  setNewAuthor({ ...newAuthor, email: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* === TABEL AUTHOR === */}
      <div className="card mb-5">
        <div className="card-header fw-bold">Daftar Author</div>
        <div className="card-body">
          {authors.length === 0 ? (
            <p className="text-muted">Belum ada author.</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.nama}</td>
                    <td>{a.email}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteAuthor(a.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
