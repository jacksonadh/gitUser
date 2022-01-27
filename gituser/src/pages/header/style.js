import styled from "styled-components";

const DivHeader = styled.div`
  margin-top: 10%;
  width: 40vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  vertical-align: center;
  position: relative;

  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
  }

  .search {
  font-size: 40px;
  color: #0278FC;
  position: absolute;
  top: 80px;
  left: 10px;
  z-index: 1;
}

button[type=submit]{
  position: absolute;
  top: 78px;
  right: 20px;
}
input::placeholder {
  color: ${props => props.theme.fontTitle};
}
`;

export default DivHeader;