import styled from "styled-components";

export const Hero = styled.section`
  display: block;
  width: 100%;
`;

export const SwiperContainer = styled.div`
  max-height: 100%;
  position: relative;
`;

export const AboutSection = styled.section`
  padding: 100px 50px;
  background-color: #ffffff;
`;

export const SectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 600;
  color: #3d6889;
`;

export const BenefitsWrapper = styled.ul`
  display: flex;
  margin-top: 30px;
  gap: 70px;
  justify-content: center;
`;

export const BenefitItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BenefitText = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: rgba(138, 138, 137, 1);
`;
