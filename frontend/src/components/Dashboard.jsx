export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="greeting-container">
        <div className="greeting">
          <h1>Welcome back, {user.fullName}</h1>
          <p>Here's what happening across your students.</p>
        </div>

        <p>Saturday, June 20 2026</p>
      </div>
      <div className="recent-activity">
        <p>Recent Activity</p>

        <div className="activity-container">
            <div className="activity">

            </div>
        </div>
      </div>
    </>
  );
}
