import { BiErrorAlt } from "react-icons/bi";
import { ErrorText, ErrorWrapper } from "./Error.styled";

const Error = ({ error }) => {
  return (
    <ErrorWrapper>
      <BiErrorAlt size={100} color="#c40505" />
      <ErrorText>
        Oops! An error occured while requesting data: {error}
      </ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
