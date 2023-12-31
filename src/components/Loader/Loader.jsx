import { Oval } from "react-loader-spinner";
import { SpinnerContainer, SpinnerOverlay } from "./Loader.styled";

export const Loader = () => {
  return (
    <>
      <SpinnerOverlay>
        <SpinnerContainer>
          <Oval
            height="80"
            width="80"
            color="#4289fe"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#96BEFF"
            strokeWidth="2"
            strokeWidthSecondary="2"
          />
        </SpinnerContainer>
      </SpinnerOverlay>
    </>
  );
};

export default Loader;
