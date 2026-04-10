import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Form submitted!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    });
  }

  return (
    <div className="contact-page">
      <h1>Contact Support</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <p className="preview">
        <strong>Preview:</strong> {formData.firstName} {formData.lastName} (
        {formData.email})
      </p>
    </div>
  );
}

export default ContactPage;