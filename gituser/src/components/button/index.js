import ButtonStyle from './style'

export default function Button(props) {
  return (
    <ButtonStyle type="submit">{props.name}</ButtonStyle>
  )
}