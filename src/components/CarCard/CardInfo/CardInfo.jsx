import {
  CarModel,
  CarName,
  CardInfoWrapper,
  ExtraInfo,
  ExtraInfoWrapper,
  RentalPrice,
  Splitter,
} from "./CardInfo.styled";

const CardInfo = ({ data }) => {
  const {
    id,
    address,
    engineSize,
    make,
    model,
    rentalCompany,
    rentalPrice,
    type,
    year,
  } = data;

  const addressSplit = address.split(",");

  const [_, city, country] = addressSplit.map((part) => part.trim());

  const owners = [city, country, rentalCompany];
  const specifications = [type, make, id, engineSize];
  return (
    <>
      <CardInfoWrapper>
        <CarName>
          {make} <CarModel>{model}</CarModel>, {year}
        </CarName>
        <RentalPrice>{rentalPrice}</RentalPrice>
      </CardInfoWrapper>
      <ExtraInfoWrapper>
        <ExtraInfo>
          {owners.map((owner, index) => (
            <li key={index}>
              {owner}
              {index !== owners.length - 1 && <Splitter />}
            </li>
          ))}
        </ExtraInfo>
        <ExtraInfo>
          {specifications.map((specification, index) => (
            <li key={index}>
              {specification}
              {index !== specifications.length - 1 && <Splitter />}
            </li>
          ))}
        </ExtraInfo>
      </ExtraInfoWrapper>
    </>
  );
};

export default CardInfo;
