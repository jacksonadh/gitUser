import styled from "styled-components";

const Tab = styled.nav`
  width: 40vw;
  margin: 20px auto;
  position: relative;
  top: 10px;


  ul{
		list-style: none;
	}

ul li{
		float: left;
	}

	.tabLabel{
		display: block;
		width: 100px;
		background-color: ${props => props.theme.button};
		padding: 10px;
		font-size: 20px;
		color:#fff;
		cursor: pointer;
		text-align: center;
	}


.rdTab { 
	display:none;
	position: absolute;
}

.rdTab:checked ~ label { 
	background-color: ${props => props.theme.buttonHover};
	color:#fff;}

.tabContent{
	border-top: solid 5px ${props => props.theme.buttonHover};
  border-radius: 0 0 10px 10px;
	background-color: ${props => props.theme.backgroundSecondary};
	display: none;
	position: absolute;
	height: auto;
  padding: 25px;
  width: 40vw;
	left: 0;	
}

.rdTab:checked ~ .tabContent{
	display: block;
}

article{

	padding: 10px;
	color: ${props => props.theme.fontSubtitle};;
}
`;

export default Tab;