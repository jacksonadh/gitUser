import styled from "styled-components";

const Search = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  color: ${props => props.theme.fontTitle};
  background: ${props => props.theme.backgroundSecondary};
  width: 40vw;
  padding: 25px 130px 25px 60px;
  box-shadow: 5px 5px 5px ${props => props.theme.shadow};
  
  position: relative;


`;


export default Search;