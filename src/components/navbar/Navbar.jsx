import { NotificationsNoneOutlined } from "@mui/icons-material"
import Logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="px-10 w-full h-[10vh] flex justify-between items-center">
            <Link to={'/'}>
                <img src={Logo} alt="my-ride-logo" />
            </Link>
            <ul className="flex gap-8">
                <li className="hover:text-[#FBA403] cursor-pointer"><Link to={'/'}>Home</Link></li>
                <li className="hover:text-[#FBA403] cursor-pointer">Getting a Taxi</li>
                <li className="hover:text-[#FBA403] cursor-pointer"><Link to={'/mobile'}>Mobile App</Link></li>
                <li className="hover:text-[#FBA403] cursor-pointer">Contact Us</li>
            </ul>
            <div className="flex gap-5 items-center">
                <NotificationsNoneOutlined fontSize="large" />
                <img src='https://xsgames.co/randomusers/assets/avatars/male/46.jpg' className="w-9 rounded-full cursor-pointer" alt="default-user-img" />
            </div>
        </nav>
    )
}

export default Navbar