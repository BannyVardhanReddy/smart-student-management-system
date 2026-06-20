import StudentCard from "./StudentCard"

export default function StudentTable(){
    const student = {
        name : "Banny",
        class : "CSE",
        section: "C",
        roll : "538",
        email : "bannyvardhan135@gmail.com",
    }
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
            <StudentCard student={student} idx="1" ></StudentCard>
            <StudentCard student={student} idx="1" ></StudentCard>
            <StudentCard student={student} idx="1" ></StudentCard>
            <StudentCard student={student} idx="1" ></StudentCard>
            <StudentCard student={student} idx="1" ></StudentCard>
        </div>
    )
}