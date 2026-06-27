import StudentCard from "./StudentCard"

export default function StudentTable({ students = [], onDeleteStudent, onEditStudent }) {
    return (
        <div className="table-container">
            <div className="head row">
                <p>No</p>
                <p>Name</p>
                <p>Branch</p>
                <p>Section</p>
                <p>Roll No</p>
                <p>E-Mail</p>
            </div>
            {students.length === 0 ? (
                <p style={{ padding: "1rem" }}>No students added yet.</p>
            ) : (
                students.map((student, index) => (
                    <StudentCard
                        key={student.id ?? `${student.roll || index}-${index}`}
                        student={student}
                        idx={index}
                        onDeleteStudent={onDeleteStudent}
                        onEditStudent={onEditStudent}
                    ></StudentCard>
                ))
            )}
        </div>
    )
}