export default function Header(){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return(
        <section className="home-header">
            <h1>Smart Students</h1>
            <p>Hello, {user.fullName} </p>
        </section>
    )
}