import CardRepo from "./style";

export default function RepositoryItem(props) {
  return (
    <CardRepo>
      <article>
        <h2>{props.name}</h2>
        <a href={props.linkToRepo} target="_blank" rel="noreferrer">{props.fullName}</a>
      </article>
    </CardRepo>
  )
}