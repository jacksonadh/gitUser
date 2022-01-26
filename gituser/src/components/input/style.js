import styled from "styled-components";

const Search = styled.input`
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.fontTitle};
  background: ${props => props.theme.backgroundSecondary};
  width: 55vw;
  padding: 25px;
  box-shadow: 5px 5px 5px ${props => props.theme.shadow};
  
  position: relative;
`;

export default Search;