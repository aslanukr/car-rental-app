import { Hero, SwiperContainer } from "./Home.styled";
import HeroSwiper from "./Swiper";

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
