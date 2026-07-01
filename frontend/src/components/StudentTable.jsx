import StudentCard from "./StudentCard"

export default function StudentTable({students, setStudents}) {
    return(
        <div className="table-container">
            <div className="head row">
                <p>No</p>
                <p>Name</p>
                <p>Class</p>
                <p>Section</p>
                <p>Roll No</p>
                <p>E-Mail</p>
            </div>
            {students.map((student, index) => (
                <StudentCard key={student._id} student={student} index={index} setStudents={setStudents}/>
            ))}
        </div>
    )
}