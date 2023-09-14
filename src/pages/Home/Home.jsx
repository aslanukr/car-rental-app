import HeroSwiper from "src/components/Swiper/Swiper";
import { Hero, SwiperContainer } from "./Home.styled";

const Home = () => {
  return (
    <Hero>
      <SwiperContainer>
        <HeroSwiper />
      </SwiperContainer>
    </Hero>
  );
};

export default Home;
