import BannerAboutCard from "./BannerAboutCard"
import BannerAboutData from "./BannerAboutData"
const BannerAbout = () => {
    return (
        <div className='Container flex flex-col gap-10'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h3 className='text-[#FBA403] font-normal lg:text-[26px] md:text-[23px] text-[20px] leading-8'>The best out there</h3>
                <h2 className='font-bold lg:text-[45px] text-[35px] md:text-[40px] leading-[52px] '>Why choose myRide?</h2>
            </div>
            <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:justify-between gap-5 justify-center">
                {
                    BannerAboutData.map((item) => (
                        <BannerAboutCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default BannerAbout