import styled from "styled-components";

const CardRepo = styled.div`
  border-radius: 5px;
  background: ${props => props.theme.backgroundPrimary};
  box-shadow: 0px 30px 40px -20px ${props => props.theme.shadow};
  padding: 30px;
  margin: 20px;
  width: auto;

    a {
      color: ${props => props.theme.button};
    }

    article{
      padding: 10px;
      color: ${props => props.theme.fontSubtitle};
}
`;

export default CardRepo;