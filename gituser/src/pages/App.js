
import { Title } from '../styles/style';
import Button from '../components/button/index';
import Input from '../components/input/index'
import Body from '../pages/body/style';
import Profile from '../components/profile/index'

import { ThemeContextProvider } from '../provider/themeContext';
import Switch from '../components/switch/index';



function App() {
  return (

    <ThemeContextProvider>
      <Body>
        <Title>Devfinder</Title>
        <Input />
        <Button name="Search"></Button>
        <Switch />
        <Profile />
      </Body>
    </ThemeContextProvider>
  )
}

export default App;