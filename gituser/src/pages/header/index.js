import DivHeader from './style'

import { Title } from '../../styles/style';
import Switch from '../../components/switch/index'
import Button from '../../components/button/index';
import Input from '../../components/input/index'

import useGithub from '../../hooks/gitHook';
import { useState } from 'react'


export default function Header() {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <DivHeader>
      <span>
        <Title>devfinder</Title>
        <Switch />
      </span>
      <Input onChange={(event) => setUsernameForSearch(event.target.value)} />
      <Button className="search" name="Search" onClick={submitGetUser}></Button>
    </DivHeader>
  )
}