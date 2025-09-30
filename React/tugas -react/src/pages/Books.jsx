// src/pages/Books.jsx
import { useState } from "react";
import booksData from "../Utils/books";

function Books() {
  const [products, setProducts] = useState(booksData);

  // Function untuk tambah buku baru
  const addBook = () => {
    const newBook = {
      id: products.length + 1,
      title: "Learn React Fast",
      author: "John Doe",
      year: 2025,
      description: "A new book about learning React efficiently.",
      img: "https://via.placeholder.com/200x300?text=New+Book"
    };
    setProducts([...products, newBook]);
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
            <button className="btn btn-primary mt-3" onClick={addBook}>
              ➕ Tambah Buku
            </button>
          </div>
        </div>
      </section>

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
