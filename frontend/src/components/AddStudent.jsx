import { useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  roll: "",
  branch: "",
  section: "",
  phone: "",
  city: "",
};

export default function AddStudent({ onAddStudent, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      return;
    }

    onAddStudent({
      ...formData,
      roll: formData.roll.toString(),
      branch: formData.branch.trim(),
    });
    setFormData(initialFormState);
  };

  return (
    <div className="add-student-form">
      <form onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" placeholder="Enter roll no" value={formData.roll} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="branchName">Branch</label>
            <input type="text" name="branch" id="branch" placeholder="Enter branch" value={formData.branch} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" placeholder="Enter section" value={formData.section} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="Enter city" value={formData.city} onChange={handleChange} />
          </div>
        </div>

        <div className="row-3">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="add-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
