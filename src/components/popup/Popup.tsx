import styled from "styled-components";

const Conatiner = styled.div`
  height: 300px;
  border: 1px solid red;
`;

const Hamberger = styled.div`
  width: 25px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const HambergerLine = styled.span`
  width: 25px;
  display: block;
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  height: 2px;
  &::before,
  &::after {
    background-color: ${(props) => props.theme.colors.black};
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
  }
  &::before {
    top: 5px;
  }
  &::after {
    top: -5px;
  }
`;

const Popup = () => {
  return (
    <>
      <Conatiner>Container</Conatiner>
      <Hamberger>
        <HambergerLine />
      </Hamberger>
    </>
  );
};

export default Popup;
