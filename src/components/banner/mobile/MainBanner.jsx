import GooglePlay from '../../../assets/GooglePlay.png'
import AppStore from '../../../assets/AppStore.png'
import mobileBannerImg from '../../../assets/MobileBannerImage.png'
const MainBanner = () => {
    return (
        <div className='!mt-[10dvh] Container grid lg:justify-between lg:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-0 gap-5 lg:p-0 px-10'>
            <div className='lg:w-[500px] w-full flex items-center'>
                <div className='w-full flex flex-col gap-8 items-start'>
                    <div>
                        <h3 className='font-normal lg:text-[26px] text-[20px] leading-[30px]'>Book rides on the go!</h3>
                        <h1 className='lg:text-[50px] text-[30px] font-bold leading-[59px] '>Introducing the <span className='text-[#FBA403]'><span className='italic'>my</span>RIDE Mobile App</span></h1>
                    </div>
                    <div className='w-full flex gap-5 justify-start'>
                        <img src={GooglePlay} alt="google-play" />
                        <img src={AppStore} alt="app-store" />
                    </div>
                </div>
            </div>
            <div className='max-w-[730px]'>
                <img src={mobileBannerImg} alt="taxi-mobile-img" className='w-full'/>
            </div>
        </div>
    )
}

export default MainBanner