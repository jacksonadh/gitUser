import styled from "styled-components";

const Div = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.fontSubtitle};
  box-shadow: 5px 5px 5px ${props => props.theme.shadow};
`;

export default Div;