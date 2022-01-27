import DivHeader from './style'

import { Title } from '../../styles/style';
import Switch from '../../components/switch/index'
import Button from '../../components/button/index';
import Input from '../../components/input/index'



export default function Header() {
  return (
    <DivHeader>
      <span>
        <Title>devfinder</Title>
        <Switch />
      </span>
      <Input />
      <Button className="search" name="Search"></Button>
    </DivHeader>
  )
}