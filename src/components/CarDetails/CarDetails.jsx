import {
  AccentSpan,
  CarImg,
  ConditionsItem,
  ConditionsList,
  Description,
  DetailsInfo,
  DetailsWrapper,
  ExtraInfoList,
  InfoTitle,
  Make,
  ModalButton,
  Model,
  Splitter,
  Thumb,
} from "./CarDetails.styled";

const CarDetails = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    type,
    year,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = data;

  const addressSplit = address.split(",");
  const [_, city, country] = addressSplit.map((part) => part.trim());
  const additionals = [...accessories, ...functionalities];
  const rentalSplit = rentalConditions.split("\n");
  const [text, age] = rentalSplit[0].split(":");

  const formatMiles = Intl.NumberFormat("en-US").format(mileage);

  return (
    <DetailsWrapper>
      <Thumb>
        <CarImg src={img} alt={`${make} ${model} `} />
      </Thumb>
      <Make>
        {make} <Model>{model}</Model>, {year}
      </Make>
      <DetailsInfo>
        {city}
        <Splitter />
        {country}
        <Splitter />
        Id: {id}
        <Splitter />
        Year: {year}
        <Splitter />
        Type: {type}
        <Splitter />
      </DetailsInfo>
      <DetailsInfo>
        Fuel Consumption: {fuelConsumption}
        <Splitter />
        Engine Size: {engineSize}
      </DetailsInfo>
      <Description>{description}</Description>
      <InfoTitle>Accessories and functionalities:</InfoTitle>
      <ExtraInfoList>
        {additionals.map((additional, index) => (
          <li key={index}>
            {additional}
            {index !== additionals.length - 1 && <Splitter />}
          </li>
        ))}
      </ExtraInfoList>
      <InfoTitle>Rental Conditions:</InfoTitle>
      <ConditionsList>
        <ConditionsItem>
          {text}: <AccentSpan>{age}</AccentSpan>
        </ConditionsItem>
        <ConditionsItem>{rentalSplit[1]}</ConditionsItem>
        <ConditionsItem>{rentalSplit[2]}</ConditionsItem>
        <ConditionsItem>
          Mileage: <AccentSpan>{formatMiles}</AccentSpan>
        </ConditionsItem>
        <ConditionsItem>
          Price: <AccentSpan>{rentalPrice}</AccentSpan>
        </ConditionsItem>
      </ConditionsList>
      <ModalButton href="tel:+380730000000">Rental car</ModalButton>
    </DetailsWrapper>
  );
};

export default CarDetails;
