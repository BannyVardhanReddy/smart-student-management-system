import { useState } from "react";

export default function EditStudent({ student, onCancel, onSave }) {
  const [formData, setFormData] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      roll: formData.roll.toString(),
      branch: formData.branch?.trim() || "",
    });
  };

  return (
    <div className="add-student-form edit-student-form">
      <form onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email || ""} onChange={handleChange} />
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" value={formData.roll || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="branch">Branch</label>
            <input type="text" name="branch" id="branch" value={formData.branch || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" value={formData.section || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={formData.phone || ""} onChange={handleChange} />
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={formData.city || ""} onChange={handleChange} />
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
