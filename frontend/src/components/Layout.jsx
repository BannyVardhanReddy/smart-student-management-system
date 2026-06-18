import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout(){
    const token = localStorage.getItem("token");
    console.log(token);
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
}