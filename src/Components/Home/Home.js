import React, { useState } from "react";
import axios from "axios";

function Home() {
  //orderVariable
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddresss, setDestinationAddresss] = useState("");
  const [description, setDescription] = useState("");

  //contact variable
  const [fullNameC, setFullNameC] = useState("");
  const [emailC, setEmailC] = useState("");
  const [mobilenoC, setMobilenoC] = useState("");
  const [descriptionC, setDescriptionC] = useState("");

  const [formTitle, setFormTitle] = useState("");
  const [notification, setNotification] = useState("");
  const [r, setR] = useState(false);

  const [vehicles, setVechles] = useState([
    {
      title: "Eicher",
      imgUrl:
        "https://www.financialexpress.com/wp-content/uploads/2021/09/Mahindra-Furio-7.jpg",
      description:
        "Eicher has Gross Vehicle Weight of 11990 kg & Load Body Options available are Side Deck, Drop Side Deck, High Side Deck",
    },
    {
      title: "Pickup",
      imgUrl:
        "https://4.imimg.com/data4/XQ/XC/ANDROID-62194208/product-500x500.jpeg",
      description:
        "The kerb weight of Bolero Pik-Up is 1725 Kg and has dimensions of 5215 mm in length, 1700 mm in width and 1865 mm^3 mm in height.",
    },
    {
      title: "Mini Truck",
      imgUrl:
        "https://trkcdn.tractorjunction.com/images/truck/supro-maxitruck-1614684208.jpg",
      description:
        "The Mini Truck has 1615 KG of GVW and provides 70 Kmph maximum speed and and has a length of 3927 mm, width of 1540 mm and a wheelbase of 1950mm.",
    },
  ]);

  const handleOrderRequest = async () => {
    const body = {
      fullName: fullName,
      email: email,
      mobileno: mobileno,
      sourceAddress: sourceAddress,
      destinationAddress: destinationAddresss,
      description: description,
    };
    await axios
      .post("https://hand-to-hand-backned.herokuapp.com/order ", body)
      .then((res) => {
        setNotification(res.data);
        setR(!r);
        setFullName("");
        setEmail("");
        setMobileno("");
        setSourceAddress("");
        setDestinationAddresss("");
        setDescription("");
      })
      .catch((err) => {
        setNotification("Server Down");
        setR(!r);
        setFullName("");
        setEmail("");
        setMobileno("");
        setSourceAddress("");
        setDestinationAddresss("");
        setDescription("");
      });
  };

  const handleContactRequest = async () => {
    const body = {
      fullName: fullNameC,
      email: emailC,
      mobileno: mobilenoC,
      description: descriptionC,
    };
    await axios
      .post("https://hand-to-hand-backned.herokuapp.com/contact", body)
      .then((res) => {
        setNotification(res.data);
        setR(!r);
        setFullNameC("");
        setEmailC("");
        setMobilenoC("");
        setDescriptionC("");
      })
      .catch((err) => {
        setNotification("Server Down");
        setR(!r);
        setFullNameC("");
        setEmailC("");
        setMobilenoC("");
        setDescriptionC("");
      });
  };
  return (
    <div>
      {/* <!-- Services--> */}
      {r ? (
        <div
          style={{ backgroundColor: "#cfe2ff", color: "blue" }}
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          <strong>{notification}</strong>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setNotification("");
              setR(!r);
            }}
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">vehicles</h2>
            <h3
              style={{ fontSize: "3rem" }}
              className="section-subheading text-muted"
            >
              Book As Per Your Requirement
            </h3>
          </div>
          <div className="row text-center">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {vehicles.map((item) => {
                return (
                  <div class="col">
                    <div class="card">
                      <img
                        src={item.imgUrl}
                        class="card-img-top"
                        style={{ height: "16rem" }}
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                      </div>
                      <div
                        class="card-footer bg-transparent"
                        style={{ border: "0px" }}
                      >
                        <button
                          type="button"
                          class="btn"
                          style={{
                            backgroundColor: "#0d6efd",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          Contact Agent
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              We will contact you shortly
            </h3>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <!-- Name input--> */}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    data-sb-validations="required"
                    value={fullNameC}
                    onChange={(e) => setFullNameC(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                    value={emailC}
                    onChange={(e) => setEmailC(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0">
                  {/* <!-- Phone number input--> */}
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                    value={mobilenoC}
                    onChange={(e) => setMobilenoC(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    value={descriptionC}
                    onChange={(e) => setDescriptionC(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            {/* <!-- Submit Button--> */}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase disabled"
                id="submitButton"
                type="submit"
                onClick={handleContactRequest}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- Footer--> */}

      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                style={{ textAlign: "center" }}
                className="modal-title"
                id="exampleModalLabel"
              >
                {formTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Mobile number"
                    value={mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Source address"
                    value={sourceAddress}
                    onChange={(e) => setSourceAddress(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Destination Address"
                    value={destinationAddresss}
                    onChange={(e) => setDestinationAddresss(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message-text"
                    placeholder="Describe your Goods"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
                className="btn btn-primary"
                onClick={handleOrderRequest}
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
