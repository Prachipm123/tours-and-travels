import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function ContactPage() {
  return (
    <div style={{ "background-color": "#0b2c6e" }}>
      <Navbar />
      <div class="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h1 style={{ "text-align": "center" }}>Contact Us</h1>
            <br></br>
            <br></br>
            <form>
              <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                />
              </div>
              <br></br>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <br></br>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>

              <br></br>

              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-outline-primary ">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
