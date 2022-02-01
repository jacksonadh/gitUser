import styled from "styled-components";

const Div = styled.div`
  width: 40vw;
  height: 45vh;
  margin-top: 25px;
  border-radius: 10px;

  background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.fontSubtitle};
  box-shadow: 5px 5px 5px ${props => props.theme.shadow};

  position: relative;

  .profile {
    background: rgba(0, 0, 0, 0);
    color: ${props => props.theme.fontSubtitle};
    width: 70%;
    position: absolute;
    margin: auto;
    top: 20px;
    left: 160px;
    display: flex;
    flex-wrap: wrap;
    
    h2 {
    width: 50%;
  }

    .join {
      width: 50%;
      text-align: right;
    }
  
    
  }

  .bio {
    background: rgba(0, 0, 0, 0);
    color: ${props => props.theme.fontSubtitle};
    width: 70%;
    display: block;

    position: absolute;
    top: 50px;
    left: 160px;
    margin: auto;
    
    
    a {
      text-align: left;
      color: ${props => props.theme.button};
    }

    p{
      margin-top: 25px;
    }
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.fontSubtitle};
    width: 60%;

    position: absolute;
    top: 200px;
    left: 160px;

    margin: auto;
    padding: 20px;
    border-radius: 10px;
    }

   .data {
    background: rgba(0, 0, 0, 0);
    color: ${props => props.theme.fontSubtitle};
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 280px;
    left: 160px;

    ul {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      width: 100%;

      li {
        width: 50%;
        padding: 10px 5px;
      }
    }
   } 
`;

export default Div;