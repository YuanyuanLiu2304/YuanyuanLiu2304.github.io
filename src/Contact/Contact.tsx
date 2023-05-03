import handshake from "../assets/handshake.png";
import "./contact.css";

export function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="message">
          <span
            className="bi bi-circle-fill"
            style={{ color: "#ffd109" }}
          ></span>
          <span>Contact me</span>
        </div>
        <h1>
          Let's create something amazing together
          <img src={handshake} alt="handshake" />
        </h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          ></input>
          <textarea
            name="message"
            placeholder="Enter your message"
            id="message"
            required
          ></textarea>
          <button type="submit" className="submit btn btn-warning ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
