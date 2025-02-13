import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div className='w-[100vw] block relative '>
            <header className='h-[10vh] overflow-visible'>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout