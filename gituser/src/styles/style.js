import styled from "styled-components";

const Title = styled.h1`

  font-size: 1.5em;
  text-align: left;
  color: ${props => props.theme.fontTitle};
`;

const Subtitle = styled.h2`

  font-size: 1.2em;
  text-align: left;
  color: ${props => props.theme.fontTitle};
`;

const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${props => props.theme.backgroundPrimary};
  color: ${props => props.theme.fontSubtitle};
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  `;

export { Title, Subtitle, Info };
