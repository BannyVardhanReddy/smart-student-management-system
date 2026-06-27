import { useState } from "react";
import EditStudent from "./EditStudent";

export default function StudentCard({ student, idx, onDeleteStudent, onEditStudent }) {
  const [edit, setEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSave = (updatedStudent) => {
    onEditStudent(updatedStudent);
    setEdit(false);
  };

  return (
    <div className="row-combined">
      <div className="row">
        <p>{idx + 1}</p>
        <p>{`${student.firstName} ${student.lastName}`}</p>
        <p>{student.branch}</p>
        <p>{student.section}</p>
        <p>{student.roll}</p>
        <p>{student.email}</p>

        <button onClick={() => setEdit((prev) => !prev)} className="edit-btn">
          {edit ? "Close" : "Edit"}
        </button>
        <button className="delete-btn" onClick={() => setShowDeleteConfirm(true)}>
          Delete
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="add-student-form" style={{ marginTop: "0.5rem", padding: "1rem", border: "1px solid #f5c6cb", backgroundColor: "#fff5f5" }}>
          <p style={{ marginBottom: "0.75rem", color: "#a94442" }}>
            Are you sure to delete?, changes can't be undone
          </p>
          <div className="row-3">
            <button type="button" className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="add-btn"
              onClick={() => {
                onDeleteStudent(student.id ?? student.roll ?? idx);
                setShowDeleteConfirm(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {edit && <EditStudent student={student} onCancel={() => setEdit(false)} onSave={handleSave} />}
    </div>
  );
}
