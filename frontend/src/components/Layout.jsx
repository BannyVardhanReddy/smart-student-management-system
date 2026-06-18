import {Outlet} from 'react-router-dom';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
export default function Layout(){
    return(
        <>
            <HomeHeader></HomeHeader>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
}