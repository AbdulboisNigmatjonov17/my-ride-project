import BannerAbout from "../../components/banner/home/BannerAbout"
import MainBanner from "../../components/banner/mobile/MainBanner"
import AboutBannerData from "../../components/banner/mobile/AboutBannerData"
import BottomBanner from '../../components/banner/BottomBanner'
import Faq from "../../components/faq/Faq"
const MobilePage = () => {
  return (
    <>
      <MainBanner />
      <BannerAbout Data={AboutBannerData} text={'How does it work?'} title={'Quick and easy booking'} />
      <Faq />
      <BottomBanner />
    </>
  )
}

export default MobilePage
