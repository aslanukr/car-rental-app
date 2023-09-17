import { useState } from "react";
import Select from "react-select";
import { makes } from "src/db/makes";
import { makeStyles } from "./SelectStyles";
import {
  Form,
  FormBtn,
  Label,
  LabelWrapper,
  TextInputFrom,
  TextInputTo,
  TextInputWrapper,
} from "./Form.styled";

const makeSelectOptions = (arr) => arr.map((el) => ({ value: el, label: el }));
function generateNumberArray(start, end, increment) {
  const result = [];
  for (let i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
}

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));

const optionsMake = makeSelectOptions(sortedMakes);
const prices = generateNumberArray(10, 500, 10);
const optionsPrice = makeSelectOptions(prices);

const stylesMake = makeStyles({ container: { width: 224 } });
const stylesPrice = makeStyles({ container: { width: 125 } });

const Filter = ({ onFilter }) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "from":
        setFrom(value);
        break;
      case "to":
        setTo(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onFilter(make);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <LabelWrapper>
          <Label htmlFor="make">Car brand</Label>
          <Select
            id="make"
            name="make"
            aria-label="Search by make"
            onChange={(e) => setMake(e.value)}
            options={optionsMake}
            placeholder="Enter the text"
            unstyled
            styles={stylesMake}
          />
        </LabelWrapper>

        <LabelWrapper>
          <Label htmlFor="price">Price</Label>
          <Select
            id="price"
            name="price"
            aria-label="Search by max price"
            onChange={(e) => setPrice(e.value)}
            options={optionsPrice}
            placeholder="To $"
            isSearchable={false}
            unstyled
            styles={stylesMake}
          />
        </LabelWrapper>

        <TextInputWrapper>
          <LabelWrapper>
            <Label htmlFor="from">Car mileage / km</Label>
            <TextInputFrom
              type="number"
              name="from"
              id="from"
              placeholder="from"
              onChange={handleChange}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label htmlFor="to"></Label>
            <TextInputTo
              type="number"
              name="to"
              id="to"
              placeholder="To"
              onChange={handleChange}
            />
          </LabelWrapper>
        </TextInputWrapper>

        <FormBtn type="submit">Search</FormBtn>
      </Form>
    </>
  );
};

export default Filter;
