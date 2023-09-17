import { useState } from "react";
import Select from "react-select";
import { makes } from "src/db/makes";
import { makeStyles } from "./SelectStyles";
import { Form, FormBtn } from "./Form.styled";

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));
const stylesMake = makeStyles({ container: { width: 224 } });

const Filter = ({ onFilter }) => {
  const [make, setMake] = useState(null);

  const makeSelectOptions = (arr) =>
    arr.map((el) => ({ value: el, label: el }));

  const optionsMake = makeSelectOptions(sortedMakes);

  const handleSubmit = (event) => {
    event.preventDefault();

    onFilter(make);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
        <FormBtn type="submit">Search</FormBtn>
      </Form>
    </>
  );
};

export default Filter;
