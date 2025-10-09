import { useState } from "react";
import booksData from "../Utils/books";

function Books() {
  const [products, setProducts] = useState(booksData);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    img: ""
  });

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // Fungsi untuk menambah buku baru
  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert("Judul dan penulis tidak boleh kosong!");
      return;
    }

    const bookToAdd = {
      id: products.length + 1,
      title: newBook.title,
      author: newBook.author,
      year: newBook.year || new Date().getFullYear(),
      description: newBook.description || "Tanpa deskripsi.",
      img: newBook.img || "https://via.placeholder.com/200x300?text=New+Book",
    };

    setProducts([...products, bookToAdd]);

    // Reset form setelah menambah
    setNewBook({
      title: "",
      author: "",
      year: "",
      description: "",
      img: "",
    });
  };

  return (
    <>
      <section id="books" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Koleksi Buku</h1>
            <p className="lead text-muted">
              Pilihan buku terbaik untuk meningkatkan pengetahuan dan kualitas hidup Anda.
            </p>

            {/* 🔹 Form Input Buku Baru */}
            <div className="mt-4 text-start">
              <input
                type="text"
                name="title"
                className="form-control mb-2"
                placeholder="Judul Buku"
                value={newBook.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="author"
                className="form-control mb-2"
                placeholder="Penulis"
                value={newBook.author}
                onChange={handleChange}
              />
              <input
                type="number"
                name="year"
                className="form-control mb-2"
                placeholder="Tahun"
                value={newBook.year}
                onChange={handleChange}
              />
              <input
                type="text"
                name="img"
                className="form-control mb-2"
                placeholder="URL Gambar (opsional)"
                value={newBook.img}
                onChange={handleChange}
              />
              <textarea
                name="description"
                className="form-control mb-3"
                placeholder="Deskripsi Buku"
                value={newBook.description}
                onChange={handleChange}
              ></textarea>
              <button className="btn btn-primary w-100" onClick={addBook}>
                ➕ Tambah Buku
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Daftar Buku */}
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.img}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <small className="text-muted">
                      {book.author} - {book.year}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
