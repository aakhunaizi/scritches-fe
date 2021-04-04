import { Card, Grid } from "@material-ui/core";
import styled, { css } from "styled-components";

export const StyledHome = styled.div`
  margin-top: 5%;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const Container = styled.div`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: center;
  margin-top: 3%;
`;

export const BackgroundContainer = styled.div`
  background-image: url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/12/Vectorize-Your-Pets-Featured-Image-01.jpg");
  background-size: cover;
  padding: 6%;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
