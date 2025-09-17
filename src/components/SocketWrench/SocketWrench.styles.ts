import styled from "styled-components";

const Container = styled.div`
  height: 98vh;
  width: 100vw;
  position: relative;

  & .background-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .break {
    display: none;
    position: absolute;
    font-size: 100px;
    top: calc(50% - 150px);
    left: calc(50% - (290px / 2));
  }

  .break.active {
    display: initial;
  }
`;

export { Container };
