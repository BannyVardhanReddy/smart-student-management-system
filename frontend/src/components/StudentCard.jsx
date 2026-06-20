import { useState } from "react";
import AddStudent from "./AddStudent";

export default function StudentCard({ student, idx }) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="row-combined">
      <div className="row">
        <p>{idx + 1}</p>
        <p>{student.name}</p>
        <p>{student.class}</p>
        <p>{student.section}</p>
        <p>{student.roll}</p>
        <p>{student.email}</p>

        <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
        <button>Delete</button>
      </div>

      {edit && <AddStudent />}
    </div>
  );
}
