import { useState } from "react";
import EditStudent from "./EditStudent";
import axios from "axios";
export default function StudentCard({ student, index, setStudents }) {
  const [edit, setEdit] = useState(false);

  async function handleOnDelete(e, id) {
    e.preventDefault();

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.firstName} ${student.lastName}?`
    );
    if(!confirmDelete) return;

    const token = localStorage.getItem("token");  

    try{
        const response = await axios.delete(
            `http://localhost:5000/api/students/${id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
        );
        console.log(response.data);
        alert("Student deleted successfully");
        setStudents(prevStudents => prevStudents.filter(stu => stu._id !== id));
    }catch(err){
      console.log(err);
      console.log(err.response.data);
    }
  }
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
        <button className="delete-btn" onClick={()=>handleOnDelete(event,student._id)}>Delete</button>
      </div>

      {edit && <EditStudent student={student} setEdit={setEdit} setStudents={setStudents}/>}
    </div>
  );
}
