import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 461px;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 469px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Make = styled.h3`
  margin-top: 14px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: #121417;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const DetailsInfo = styled.p`
  margin-top: 4px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Splitter = styled.span`
  &::after {
    content: "|";
    color: rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    margin-left: 6px;
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const InfoTitle = styled.h4`
  margin-top: 24px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ExtraInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(54, 53, 53, 1);
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
`;

export const AccentSpan = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
`;

export const ModalButton = styled.a`
  display: block;
  width: 168px;
  margin-top: 24px;
  border-radius: 12px;
  padding: 12px 50px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
