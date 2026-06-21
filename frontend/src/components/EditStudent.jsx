export default function EditStudent({student}) {
  return (
    <div className="add-student-form edit-student-form">
      <form action="">
        <div className="row-1">
          <div className="col">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="name" value={student.firstName}/>
          </div>

          <div className="col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="name" value={student.lastName}/>
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={student.email}/>
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" value={student.roll}/>
          </div>

          <div className="col">
            <label htmlFor="class">Class</label>
            <input type="text" name="class" id="class" value={student.class}/>
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" value={student.section}/>
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={student.phone}/>
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={student.city}/>
          </div>
        </div>

        <div className="row-3">
            <button className="cancel-btn">Cancel</button>
            <button className="add-btn">Save</button>
        </div>
      </form>
    </div>
  );
}
