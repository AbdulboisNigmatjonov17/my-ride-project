import GooglePlay from '../../../assets/GooglePlay.png';
import AppStore from '../../../assets/AppStore.png';
import mobileBannerImg from '../../../assets/MobileBannerImage.png';

const MainBanner = () => {
    return (
        <div className='!mt-[10dvh] Container lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 lg:p-0 px-6 md:px-10 flex flex-col-reverse lg:flex-row justify-center items-center'>
            <div className='lg:max-w-[500px] w-full flex items-center'>
                <div className='w-full flex flex-col gap-6 md:gap-8 items-start'>
                    <div>
                        <h3 className='font-normal lg:text-[26px] text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]'>
                            Book rides on the go!
                        </h3>
                        <h1 className='lg:text-[50px] text-[26px] md:text-[30px] font-bold leading-[36px] md:leading-[46px]'>
                            Introducing the <span className='text-[#FBA403]'><span className='italic'>my</span>RIDE Mobile App</span>
                        </h1>
                    </div>
                    <div className='w-full flex gap-4 md:gap-5 justify-start'>
                        <img src={GooglePlay} alt="google-play" className="h-10 md:h-12 lg:h-auto" />
                        <img src={AppStore} alt="app-store" className="h-10 md:h-12 lg:h-auto" />
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[730px] w-full flex justify-center'>
                <img src={mobileBannerImg} alt="taxi-mobile-img" className='w-full max-w-[400px] md:max-w-[550px] lg:max-w-full' />
            </div>
        </div>
    );
};

export default MainBanner;
