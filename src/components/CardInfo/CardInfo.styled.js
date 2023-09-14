import styled from "styled-components";

export const CardInfoWrapper = styled.div`
  margin-top: 14px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CarName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const RentalPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const ExtraInfoWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;

export const ExtraInfo = styled.ul`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
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
