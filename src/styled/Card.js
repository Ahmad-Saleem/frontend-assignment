import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 282px;
  height: 348px;

  background: #ffffff;

  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 4px;
  font-size: 14px;
`;

export const CardImage = styled.div`
  width: 280px;
  height: 300px;

  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 7px 7px 0px 0px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex: 1;
  padding: 4px;
  h4 {
    margin: auto;
    text-align: center;
    color: #000000;
    font-weight: normal;
  }
`;

export const FloatPill = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: 1px solid black;
  position: absolute;
  top: 14px;
  left: 14px;
  background-color: white;

  span {
    font-size: 12px;
    text-align: center;
    margin: auto;
    color: black;
  }
`;
