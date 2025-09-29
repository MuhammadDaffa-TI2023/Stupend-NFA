function Books({ products }) {
    return (
      <>
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
      </>
    );
  }
  
  export default Books;
  