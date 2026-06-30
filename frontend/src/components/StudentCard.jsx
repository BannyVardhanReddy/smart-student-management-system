import { useState } from "react";
import EditStudent from "./EditStudent";

export default function StudentCard({ student, index }) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="row-combined">
      <div className="row">
        <p>{index + 1}</p>
        <p>{student.firstName+student.lastName}</p>
        <p>{student.class}</p>
        <p>{student.section}</p>
        <p>{student.roll}</p>
        <p>{student.email}</p>

        <button onClick={() => setEdit((prev) => !prev)} className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>

      {edit && <EditStudent student={student} setEdit={setEdit}/>}
    </div>
  );
}
