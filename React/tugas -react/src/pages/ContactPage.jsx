function ContactPage() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nama</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pesan</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Tulis pesan Anda"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim
            </button>
          </form>
        </div>

        {/* Info Kontak */}
        <div className="col-md-6">
          <h5>Alamat Kami</h5>
          <p>Jl. Merdeka No.123, Jakarta</p>
          <p>Email: bookstore@gmail.com</p>
          <p>Telepon: +62 812 3456 7890</p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
