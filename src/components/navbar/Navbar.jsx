import { NotificationsNoneOutlined, Menu as MenuIcon } from "@mui/icons-material";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="px-10 w-full h-full flex justify-between items-center shadow-md sticky z-[1200] top-0 bg-[#242424] [-webkit-sticky]">
            <Link to={"/"}>
                <img src={Logo} alt="my-ride-logo" />
            </Link>

            {/* Mobile */}
            <div className="lg:hidden md:hidden">
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon fontSize="large" className="text-white" />
                </IconButton>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    <List className="w-60">
                        <ListItem className="hover:bg-[#e2e2e2]" onClick={() => setOpen(false)}>
                            <Link to={"/"}><ListItemText primary="Home" className="cursor-pointer" /></Link>
                        </ListItem>
                        <ListItem className="hover:bg-[#e2e2e2]" onClick={() => setOpen(false)}>
                            <ListItemText primary="Getting a Taxi" />
                        </ListItem>
                        <ListItem className="hover:bg-[#e2e2e2]" onClick={() => setOpen(false)}>
                            <Link to={"/mobile"}><ListItemText primary="Mobile App" /></Link>
                        </ListItem>
                        <ListItem className="hover:bg-[#e2e2e2]" onClick={() => setOpen(false)}>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>

            {/* Lg uchun list */}
            <ul className="hidden lg:flex md:flex gap-8">
                <li className="hover:text-[#FBA403] cursor-pointer"><Link to={"/"}>Home</Link></li>
                <li className="hover:text-[#FBA403] cursor-pointer">Getting a Taxi</li>
                <li className="hover:text-[#FBA403] cursor-pointer"><Link to={"/mobile"}>Mobile App</Link></li>
                <li className="hover:text-[#FBA403] cursor-pointer">Contact Us</li>
            </ul>

            <div className="flex gap-5 items-center">
                <NotificationsNoneOutlined fontSize="large" />
                <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
                    className="w-9 rounded-full cursor-pointer"
                    alt="default-user-img"
                />
            </div>
        </nav>
    );
};

export default Navbar;
