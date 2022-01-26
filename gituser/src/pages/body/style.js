import styled from "styled-components";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background: ${props => props.theme.backgroundPrimary};
  width: 100vw;
  height: 100vh;
`;

export default Body;