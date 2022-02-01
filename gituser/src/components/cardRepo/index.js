import CardRepo from "./style";

export default function RepositoryItem(name, linkToRepo, fullName) {
  return (
    <CardRepo>
      <h2>{name}</h2>
      <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
    </CardRepo>
  )
}