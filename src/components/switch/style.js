import styled from "styled-components";


const Slider = styled.button`
  cursor: pointer;
  
  color: ${props => props.theme.fontTitle};
  font-size: 20px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 5px;

  z-index: 1;
  ::before {
    content: "${props => props.theme.mode}";
    margin: 0 15px;
    vertical-align: text-top;
    font-size: 14px;
  }
`;

export default Slider;