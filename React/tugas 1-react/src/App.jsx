import team1 from "./assets/daffa.jpeg";
import team2 from "./assets/daffa 2.jpeg";

function App() {
  const products = [
    {
      id: 1,
      title: "Atomic Habits",
      desc: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      id: 2,
      title: "The Psychology of Money",
      desc: "Timeless lessons on wealth, greed, and happiness",
      img: "https://m.media-amazon.com/images/I/81Lb75rUhLL.jpg"
    },
    {
      id: 3,
      title: "Deep Work",
      desc: "Rules for Focused Success in a Distracted World",
      img: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      id: 4,
      title: "Ikigai",
      desc: "The Japanese Secret to a Long and Happy Life",
      img: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      desc: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
      img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    },
    {
      id: 6,
      title: "Think and Grow Rich",
      desc: "The landmark bestseller on the secrets of success",
      img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
    },
  ];
  

  return (
    <>
      {/* header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#home"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">Book Store</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#books" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* hero */}
        <section id="home" className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Selamat Datang di Book Store
              </h1>
              <p className="lead">
                Temukan koleksi buku terbaik yang menginspirasi, mendidik, dan
                menemani perjalanan hidup Anda. Dari bisnis, pengembangan diri,
                hingga literatur populer.
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

        {/* product list */}
        <section id="books" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Koleksi Buku</h1>
              <p className="lead text-muted">
                Pilihan buku terbaik untuk meningkatkan pengetahuan dan kualitas hidup Anda.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.title}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.desc}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary">Detail</button>
                          <button type="button" className="btn btn-sm btn-outline-success">Beli</button>
                        </div>
                        <small className="text-muted">Stok Tersedia</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* team */}
        <section id="team" className="container my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Team</h2>
            <p className="text-muted">Tim hebat di balik Book Store</p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={team1}
                  className="rounded-circle mx-auto mt-3"
                  alt="Foto Daffa"
                  width="200"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Daffa</h5>
                  <p className="card-text">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={team2}
                  className="rounded-circle mx-auto mt-3"
                  alt="Foto Budi"
                  width="200"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">Budi</h5>
                  <p className="card-text">Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm text-center">
              <img
                  src={team1}
                  className="rounded-circle mx-auto mt-3"
                  alt="Foto Daffa"
                  width="200"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">M Daffa</h5>
                  <p className="card-text">Head of Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="container my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">Ada pertanyaan? Hubungi kami!</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Masukkan email Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Kirim</button>
              </form>
            </div>
            <div className="col-md-6">
              <h5>Alamat Kami</h5>
              <p>Jl. Merdeka No.123, Jakarta</p>
              <p>Email: bookstore@gmail.com</p>
              <p>Telepon: +62 812 3456 7890</p>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="py-3 my-4 border-top">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#books" className="nav-link px-2 text-body-secondary">Book</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            © {new Date().getFullYear()} Book Store, Muhammad Daffa
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
