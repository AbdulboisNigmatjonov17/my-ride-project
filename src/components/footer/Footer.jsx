import footerData from "./footerData"
import bigLogo from '../../assets/Logo.png'
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material"

const Footer = () => {
    return (
        <footer className="Container flex justify-between gap-20">
            <div className="w-[330px] flex flex-col gap-4 items-start">
                <img src={bigLogo} alt="my-ride-logo" />
                <p className="text-[#B3B3B3] font-normal text-[16px] leading-2xl">MyRide Inc., 2nd Floor, New York, NY 10016</p>
                <div className="flex gap-5">
                    <FacebookOutlined fontSize="large" />
                    <Instagram fontSize="large" />
                    <Twitter fontSize="large" />
                </div>
            </div>
            <div className="w-[865px] flex gap-10 justify-start">
                {
                    footerData.map((item) => (
                        <ul key={item.id}>
                            <h3 className="mb-3 font-medium text-[20px] leading-[27px]">{item.h3}</h3>
                            <li className="font-normal text-[16px] leading-[19px] mt-2">{item.li1}</li>
                            <li className="font-normal text-[16px] leading-[19px] mt-2">{item.li1}</li>
                            <li className="font-normal text-[16px] leading-[19px] mt-2">{item.li2}</li>
                            <li className="font-normal text-[16px] leading-[19px] mt-2">{item.li3}</li>
                            <li className="font-normal text-[16px] leading-[19px] mt-2">{item.li4}</li>
                        </ul>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer