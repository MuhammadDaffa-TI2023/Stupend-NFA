import team1 from "../assets/daffa.jpeg";
import team2 from "../assets/daffa 2.jpeg";

function Team() {
  return (
    <section className="container my-5">
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
  );
}

export default Team;
