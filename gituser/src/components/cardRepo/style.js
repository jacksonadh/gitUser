import styled from "styled-components";

const CardRepo = styled.div`
  border-radius: 5px;
    box-shadow: 0px 30px 40px -20px ${props => props.theme.shadow};
    padding: 30px;
    margin: 20px;  
`;

export default CardRepo;