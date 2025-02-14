import BannerAbout from '../../components/banner/home/BannerAbout'
import BottomBanner from '../../components/banner/BottomBanner'
import BookingSection from '../../components/booking/BookingSection'
import Cards from '../../components/card/Cards'
import BannerAboutData from '../../components/banner/home/BannerAboutData'
const HomePage = () => {
  return (
    <>
      <BookingSection />
      <BannerAbout title={'The best out there'} text={'Why choose myRide?'} Data={BannerAboutData}/>
      <Cards />
      <BottomBanner />
    </>
  )
}

export default HomePage