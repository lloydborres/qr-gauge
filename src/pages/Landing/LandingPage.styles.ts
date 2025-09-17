import { heroImg } from "@assets";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  .hero {
    background-image: url(${heroImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative;
    color: white;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    padding: 2rem;
  }

  button {
    background-color: #00ff66;
    color: #000;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1rem;
    display: inline-block;
    transition: background 0.3s;
  }

  .drill-bits-container {
    position: absolute;
    bottom: -20px;
    left: calc(50% - (300px / 2));
    transition: transform 0.4s ease-in-out;

    img {
      width: 300px;
    }
  }

  button:hover + div.drill-bits-container,
  button:active + div.drill-bits-container {
    transform: translateY(-80%);
  }
`;

export { Container };
