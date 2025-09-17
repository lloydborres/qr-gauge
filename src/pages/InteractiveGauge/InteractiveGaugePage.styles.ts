import styled from "styled-components";

const Container = styled.div`
  position: relative;

  div.text-helper-wrapper {
    position: absolute;
    bottom: calc(5% + 50px);
    left: 0;
    right: 0;
  }

  p {
    width: 200px;
    margin: 10px auto;
    text-align: center;
    color: white;
  }

  button {
    display: flex;
    position: absolute;
    bottom: 5%;
    left: calc(50% - (50px / 2));
    padding: 0;
    height: 50px;
    width: 50px;
  }
`;

export { Container };
