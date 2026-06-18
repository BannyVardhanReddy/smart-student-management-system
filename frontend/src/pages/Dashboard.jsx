export default function Dashboard(){
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        <h1>Hello, {user?.fullName ?? "Student"}</h1>
    )
}