export default function Dashboard(){
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return(
        <h1>Hello,{user.fullName}</h1>
    )
}