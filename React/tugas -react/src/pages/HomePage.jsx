// src/pages/HomePage.jsx
import books from "../Utils/books";

function HomePage() {
  return (
    <>
      <section id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Selamat Datang di Book Store
            </h1>
            <p className="lead">
              Temukan koleksi buku terbaik yang menginspirasi, mendidik, dan menemani perjalanan hidup Anda.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Belanja Sekarang
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Lihat Koleksi
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=720"
              alt="hero book"
              width="720"
            />
          </div>
        </div>
      </section>

      {/* Bagian tambahan untuk menampilkan beberapa buku */}
      <section id="highlight" className="container my-5">
        <h2 className="text-center mb-4">📚 Buku Terbaru</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {books.slice(0, 3).map((book) => (
            <div className="col" key={book.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "350px", objectFit: "cover" }}
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
      </section>
    </>
  );
}

export default HomePage;
