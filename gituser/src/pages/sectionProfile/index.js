import Div from './style';
import Imag from '../../components/img';

import { Info, Subtitle } from '../../styles/style'

import { BiMap, BiLinkAlt, BiBuildings } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi"

export default function Profile() {
  return (
    <Div>
      <Imag />
      <Info className="profile">
        <Subtitle>The Octocat</Subtitle>
        <p className="join">Joined 25 Jan 2021</p>
      </Info>
      <Info className="bio">
        <a href='#'>@octocat</a>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore, esse vero pariatu</p>
      </Info>
      <Info className="counter">
        <span>
          <p>Repos</p>
          <Subtitle>8</Subtitle>
        </span>

        <span>
          <p>Followers</p>
          <Subtitle>3938</Subtitle>
        </span>

        <span>
          <p>Following</p>
          <Subtitle>9</Subtitle>
        </span>
      </Info>
      <Info className="data">
        <ul>
          <li><p><BiMap />  Location</p></li>
          <li><p><FiTwitter />  Twitter</p></li>
          <li><p><BiLinkAlt />  Link</p></li>
          <li><p><BiBuildings />  company</p></li>
        </ul>
      </Info>
    </Div>
  )
}