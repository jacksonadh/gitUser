import Search from './style';
import { BiSearch } from 'react-icons/bi';

export default function Input(props) {
  return (
    <>
      <Search placeholder="Search GitHub Username..." onChange={props.onChange}></Search>
      <BiSearch className="search" />
    </>
  )
}