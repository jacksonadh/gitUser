import Div from './style';
import Imag from '../img';

import { Info, Subtitle } from '../../styles/style'



export default function Profile() {
  return (
    <Div>
      <Imag />
      <Subtitle>The Octocat</Subtitle>
      <a href='#'>@octocat</a>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore, esse vero pariatu</p>
      <Info>
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

    </Div>
  )
}