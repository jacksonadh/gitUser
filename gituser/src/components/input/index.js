import Search from './style';
import { BiSearch } from 'react-icons/bi';

export default function Input() {
  return (
    <>
      <BiSearch />
      <Search placeholder="Search GitHub Username..."></Search>
    </>
  )
}