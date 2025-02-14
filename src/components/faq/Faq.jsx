import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import FaqData from "./FaqData";
import { useState } from "react";

const Faq = () => {
    const [openItems, setOpenItems] = useState({});

    const handleClick = (e, id) => {
        e.preventDefault();
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='Container'>
            <div className='w-full flex flex-col items-center justify-center mb-5'>
                <h3 className='text-[#FBA403] font-normal lg:text-[26px] md:text-[23px] text-[20px] leading-8'>
                    Quick and easy booking
                </h3>
                <h2 className='font-bold lg:text-[45px] text-[35px] md:text-[40px] leading-[52px]'>
                    FAQ
                </h2>
            </div>

            <div className="w-full flex items-center flex-col gap-4 px-5">
                {FaqData.map((item) => (
                    <details
                        key={item.id}
                        className="flex flex-col justify-between items-start p-4 bg-[#383838] rounded-sm lg:w-[965px] w-full min-h-[65px]"
                        open={openItems[item.id] || false}
                    >
                        <summary className="w-full flex justify-between" onClick={(e) => handleClick(e, item.id)}>
                            <h3>{item.title}</h3>
                            <button className="cursor-pointer">
                                {openItems[item.id] ? <ArrowDownward /> : <ArrowUpward />}
                            </button>
                        </summary>
                        <p className="mt-1 text-[#B3B3B3] font-normal text-[16px] leading-6">{item.text}</p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Faq;