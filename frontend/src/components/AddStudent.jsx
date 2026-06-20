export default function AddStudent() {
  return (
    <div className="add-student-form">
      <form action="">
        <div className="row-1">
          <div className="col">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="name" placeholder="Enter first name"/>
          </div>

          <div className="col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="name" />
          </div>

          <div className="col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
        </div>

        <div className="row-2">
          <div className="col">
            <label htmlFor="roll">Roll No</label>
            <input type="number" name="roll" id="roll" />
          </div>

          <div className="col">
            <label htmlFor="class">Class</label>
            <input type="text" name="class" id="class" />
          </div>

          <div className="col">
            <label htmlFor="section">Section</label>
            <input type="text" name="section" id="section" />
          </div>

          <div className="col">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>

          <div className="col">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
        </div>

        <div className="row-3">
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </form>
    </div>
  );
}
