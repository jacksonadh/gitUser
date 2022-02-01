import ButtonStyle from './style'

export default function Button(props) {
  return (
    <ButtonStyle type="submit" onClick={props.onClick}>{props.name}</ButtonStyle>
  )
}