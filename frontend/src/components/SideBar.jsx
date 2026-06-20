import {Link} from 'react-router-dom';

export default function SideBar(){

    function handleOnLogout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
    return(
        <div className="side-bar">
            <p>Students</p>
            <p>Edit Student</p>
            <p>Add Student</p>
            <Link to="/login" onClick={handleOnLogout}>Logout</Link>
        </div>
    )
}