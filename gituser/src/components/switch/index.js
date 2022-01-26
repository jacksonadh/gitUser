import { useThemeContext } from "../../provider/themeContext";

export default function Switch() {
  const { changeTheme } = useThemeContext();
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={changeTheme} />
        <span className="slider round" ></span>
      </label>
    </>

  )
}