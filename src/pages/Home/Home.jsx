import HeroSwiper from "src/components/Swiper/Swiper";
import {
  AboutSection,
  BenefitItem,
  BenefitText,
  BenefitsWrapper,
  Hero,
  SectionTitle,
  SwiperContainer,
} from "./Home.styled";

import { LiaFileContractSolid } from "react-icons/lia";
import { TbPigMoney, TbDiscountCheckFilled } from "react-icons/tb";

const Home = () => {
  return (
    <Hero>
      <SwiperContainer>
        <HeroSwiper />
      </SwiperContainer>
      <AboutSection>
        <SectionTitle>Our company offers:</SectionTitle>
        <BenefitsWrapper>
          <BenefitItem>
            <LiaFileContractSolid size={100} color="#3470ff" />
            <BenefitText>
              Transparent and equitable contract terms, free from hidden traps
              and surprises
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <TbPigMoney size={100} color="#3470ff" />
            <BenefitText>
              Affordable luxury: premium vehicles at unbeatable prices
            </BenefitText>
          </BenefitItem>
          <BenefitItem>
            <TbDiscountCheckFilled size={100} color="#3470ff" />
            <BenefitText>
              Verified ownership and impeccable maintenance for worry-free rides
            </BenefitText>
          </BenefitItem>
        </BenefitsWrapper>
      </AboutSection>
    </Hero>
  );
};

export default Home;
