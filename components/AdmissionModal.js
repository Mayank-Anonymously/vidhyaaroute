import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const universityData = {
  USA: ["Harvard University", "Stanford University", "MIT"],
  Canada: ["University of Toronto", "McGill University", "University of British Columbia"],
  Australia: ["University of Sydney", "Monash University", "University of Melbourne"],
  UK: ["University of Oxford", "University of Cambridge", "Imperial College London"],
  Germany: ["LMU Munich", "TU Berlin", "Heidelberg University"],
};

const AdmissionModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { university: "" }),
    }));
  };

  const handlePhoneChange = (value) => {
    setForm((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="admission-modal__overlay">
      <div className="admission-modal__container">
        <button className="admission-modal__close-btn" onClick={onClose}>×</button>
        <h2 className="admission-modal__title">Get Your Admission</h2>
        <form className="admission-modal__form" onSubmit={handleSubmit}>
          <input
            className="admission-modal__input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <PhoneInput
            country={"us"}
            value={form.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phone",
              required: true,
              placeholder: "Phone Number",
            }}
            containerClass="admission-modal__phone-container"
            inputClass="admission-modal__input"
          />

          <input
            className="admission-modal__input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            className="admission-modal__select"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          >
            <option value="">Select your preferred study destination</option>
            {Object.keys(universityData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select
            className="admission-modal__select"
            name="university"
            value={form.university}
            onChange={handleChange}
            required
            disabled={!form.country}
          >
            <option value="">Select your preferred study university</option>
            {form.country &&
              universityData[form.country].map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
          </select>

          <button type="submit" className="admission-modal__submit-btn">Submit</button>
        </form>
      </div>

     

    </div>
  );
};

export default AdmissionModal;
