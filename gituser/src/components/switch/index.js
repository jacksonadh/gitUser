import { useThemeContext } from "../../hooks/themeHook";
import Slider from "./style";
import { BiSun, BiMoon } from 'react-icons/bi'

export default function Switch() {
  const { changeTheme } = useThemeContext();
  const icon = localStorage.getItem('theme') === "light" ? <BiMoon /> : <BiSun />
  return (

    <Slider onClick={changeTheme}>
      {icon}
    </Slider>


  )
}