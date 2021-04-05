import styled from "styled-components";
import { Card, Grid, Typography } from "@material-ui/core";

export const AccordionContainer = styled.div`
  margin: auto;
`;

export const BackgroundContainer = styled.div`
  background-image: url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/12/Vectorize-Your-Pets-Featured-Image-01.jpg");
  background-size: cover;
  padding: 6%;
`;

export const Container = styled.div`
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  text-align: center;
  margin-top: 3%;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledGrid = styled(Grid)`
  display: flex;
`;

export const StyledTypography = styled(Typography)`
  margin-bottom: 2%;
`;
