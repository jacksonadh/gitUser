import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${props => props.theme.button};
  color: ${props => props.theme.colorButton};
  box-shadow: 5px 5px 5px ${props => props.theme.shadow};
  cursor: pointer;
  border: none;
    border-radius: 10px;
    padding: 12px;

    font-size: 20px;
    width: 93px;
  `

export default ButtonStyle;