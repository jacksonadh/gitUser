import Div from './style';
import { Info, Subtitle } from '../../styles/style'

import Imag from '../../components/img';
import Avatar from '../../assets/githubAvatar.jpg'

import { BiMap, BiLinkAlt, BiBuildings } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi"

import useGithub from '../../hooks/gitHook'
import Moment from 'react-moment';

export default function Profile() {

  const { githubState } = useGithub();

  return (
    <Div>
      <Imag src={githubState.user.avatar || Avatar} />
      <Info className="profile">
        <Subtitle>{githubState.user.name || "Search for a user"}</Subtitle>
        <p
          className="join">
          Joined
          <Moment format=" DD MMM YYYY">
            {githubState.user.created_at}
          </Moment>
        </p>
      </Info>
      <Info className="bio">
        <a
          href={githubState.user.html_url}
          target="_blank"
          rel="noreferrer">
          {githubState.user.login}
        </a>
        <p>{githubState.user.bio}</p>
      </Info>
      <Info className="counter">
        <span>
          <p>Repos</p>
          <Subtitle>{githubState.user.public_repos || 0}</Subtitle>
        </span>

        <span>
          <p>Followers</p>
          <Subtitle>{githubState.user.followers || 0}</Subtitle>
        </span>

        <span>
          <p>Following</p>
          <Subtitle>{githubState.user.following || 0}</Subtitle>
        </span>
      </Info>
      <Info className="data">
        <ul>
          <li><p><BiMap />  {githubState.user.location || "Not available"}</p></li>
          <li><p><FiTwitter />  {githubState.user.twitter_username || "Not available"}</p></li>
          <li><p><BiLinkAlt />  <a href={githubState.user.blog} target="_blank" rel="noreferrer">
            {githubState.user.blog || "Not available"}
          </a></p></li>
          <li><p><BiBuildings />  {githubState.user.company || "Not available"}</p></li>
        </ul>
      </Info>
      <div></div>
    </Div>
  )
}