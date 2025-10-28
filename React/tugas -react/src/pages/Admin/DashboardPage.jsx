import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newGenre, setNewGenre] = useState({ nama: "", deskripsi: "" });
  const [editingGenreId, setEditingGenreId] = useState(null);
  const [newAuthor, setNewAuthor] = useState({ name: "", bio: "" });
  const [photoFile, setPhotoFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editingAuthorId, setEditingAuthorId] = useState(null);
  const [message, setMessage] = useState("");

  // Proteksi admin
  useEffect(() => {
    if (!user || !user.is_admin) {
      alert("Hanya admin yang bisa mengakses halaman ini!");
      navigate("/home"); // redirect user biasa
    } else {
      fetchData();
    }
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

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Genre
  const handleAddOrUpdateGenre = async (e) => {
    e.preventDefault();
    try {
      if (editingGenreId) {
        await api.put(`/genres/${editingGenreId}`, newGenre);
        setMessage("✏️ Genre berhasil diupdate!");
        setEditingGenreId(null);
      } else {
        await api.post("/genres", newGenre);
        setMessage("✅ Genre berhasil ditambahkan!");
      }
      setNewGenre({ nama: "", deskripsi: "" });
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menyimpan genre.");
    }
  };

  const handleEditGenre = (genre) => {
    setEditingGenreId(genre.id);
    setNewGenre({ nama: genre.nama, deskripsi: genre.deskripsi });
  };

  const handleDeleteGenre = async (id) => {
    if (!window.confirm("Yakin hapus genre ini?")) return;
    try {
      await api.delete(`/genres/${id}`);
      setMessage("🗑️ Genre berhasil dihapus!");
      fetchData();
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menghapus genre.");
    }
  };

  // Author
  const handleAddOrUpdateAuthor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newAuthor.name);
      formData.append("bio", newAuthor.bio || "");
      if (photoFile) formData.append("photo", photoFile);

      let res;
      if (editingAuthorId) {
        res = await api.post(`/authors/${editingAuthorId}?_method=PUT`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditingAuthorId(null);
      } else {
        res = await api.post("/authors", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setMessage(res.data.message);
      setNewAuthor({ name: "", bio: "" });
      setPhotoFile(null);
      setPreview(null);
      fetchData();
    } catch (err) {
      console.error(err.response?.data || err);
      setMessage("❌ Gagal menyimpan author.");
    }
  };

  const handleEditAuthor = (author) => {
    setEditingAuthorId(author.id);
    setNewAuthor({ name: author.name, bio: author.bio || "" });
    setPreview(author.photo || null);
    setPhotoFile(null);
  };

  const handleDeleteAuthor = async (id) => {
    if (!window.confirm("Yakin hapus author ini?")) return;
    try {
      const res = await api.delete(`/authors/${id}`);
      setMessage(res.data.message);
      setAuthors(authors.filter((a) => a.id !== id));
    } catch (err) {
      console.error(err);
      setMessage("❌ Gagal menghapus author.");
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
        <div className="text-center w-100">
          <h2 className="mb-0">📊 Dashboard Admin</h2>
          <p className="text-muted mb-0">
            Halo, <strong>{user?.name || "Super Admin"}</strong> 👋
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="btn btn-outline-danger position-absolute end-0"
          style={{ right: 0 }}
        >
          Logout
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className="alert alert-info py-2" role="alert">
          {message}
        </div>
      )}

      {/* FORM GENRE */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header fw-bold bg-primary text-white">
          {editingGenreId ? "✏️ Edit Genre" : "➕ Tambah Genre"}
        </div>
        <div className="card-body">
          <form onSubmit={handleAddOrUpdateGenre} className="row g-2">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Genre"
                value={newGenre.nama}
                onChange={(e) => setNewGenre({ ...newGenre, nama: e.target.value })}
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Deskripsi"
                value={newGenre.deskripsi}
                onChange={(e) => setNewGenre({ ...newGenre, deskripsi: e.target.value })}
              />
            </div>
            <div className="col-md-2 d-flex gap-2">
              <button type="submit" className="btn btn-success w-100">
                {editingGenreId ? "Update" : "Tambah"}
              </button>
              {editingGenreId && (
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    setEditingGenreId(null);
                    setNewGenre({ nama: "", deskripsi: "" });
                  }}
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* TABEL GENRE */}
      <div className="card mb-5 shadow-sm">
        <div className="card-header fw-bold bg-light">Daftar Genre</div>
        <div className="card-body">
          {genres.length === 0 ? (
            <p className="text-muted">Belum ada genre.</p>
          ) : (
            <table className="table table-striped table-hover">
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
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditGenre(g)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteGenre(g.id)}>
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

      {/* FORM AUTHOR */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header fw-bold bg-success text-white">
          {editingAuthorId ? "✏️ Edit Author" : "➕ Tambah Author Baru"}
        </div>
        <div className="card-body">
          <form onSubmit={handleAddOrUpdateAuthor} className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Author"
                value={newAuthor.name}
                onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Bio Author"
                value={newAuthor.bio}
                onChange={(e) => setNewAuthor({ ...newAuthor, bio: e.target.value })}
              />
            </div>
            <div className="col-md-2">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPhotoFile(file);
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
            <div className="col-md-2 d-flex gap-2">
              <button type="submit" className="btn btn-success w-100">
                {editingAuthorId ? "Update" : "Tambah"}
              </button>
              {editingAuthorId && (
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    setEditingAuthorId(null);
                    setNewAuthor({ name: "", bio: "" });
                    setPhotoFile(null);
                    setPreview(null);
                  }}
                >
                  Batal
                </button>
              )}
            </div>
          </form>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover", marginTop: "10px", borderRadius: "8px" }}
            />
          )}
        </div>
      </div>

      {/* TABEL AUTHOR */}
      <div className="card mb-5 shadow-sm">
        <div className="card-header fw-bold bg-light">Daftar Author</div>
        <div className="card-body">
          {authors.length === 0 ? (
            <p className="text-muted">Belum ada author.</p>
          ) : (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Foto</th>
                  <th>Nama</th>
                  <th>Bio</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((a, i) => (
                  <tr key={a.id}>
                    <td>{i + 1}</td>
                    <td>
                      {a.photo ? (
                        <img
                          src={a.photo}
                          alt={a.name}
                          style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                        />
                      ) : (
                        <span className="text-muted">Tidak ada</span>
                      )}
                    </td>
                    <td>{a.name}</td>
                    <td>{a.bio}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditAuthor(a)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteAuthor(a.id)}>
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
