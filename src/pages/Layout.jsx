import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { ArrowUpward } from '@mui/icons-material'

const Layout = () => {

    const handleScrollToTop = () => {
        let currentPosition = window.scrollY;
        const scrollStep = currentPosition / 20;

        const scrollAnimation = () => {
            if (currentPosition > 0) {
                currentPosition -= scrollStep;
                window.scrollTo(0, currentPosition);
                requestAnimationFrame(scrollAnimation);
            }
        };

        requestAnimationFrame(scrollAnimation);
    };

    return (
        <>
            <header className='relative' id='nav'>
                <Navbar />
            </header>
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <button className="fixed bottom-10 lg:right-30 md:right-10 right-5 w-[50px] h-[50px] rounded-full bg-[#2C2C2C] cursor-pointer" onClick={() => {
                handleScrollToTop();
            }}>
                <ArrowUpward />
            </button>
            <Footer />
        </>
    )
}

export default Layout