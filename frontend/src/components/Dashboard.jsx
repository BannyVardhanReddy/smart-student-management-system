export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="greeting-container">
        <div className="greeting">
          <h1>Welcome back, {user.name}</h1>
          <p>Here's what happening across your students.</p>
        </div>

        <p>Saturday, June 20 2026</p>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>

        <div className="activity-container">
            <div className="activity">
                
            </div>
        </div>
      </div>
    </>
  );
}
