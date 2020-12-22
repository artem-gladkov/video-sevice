import './Search.scss'
import Input from "../Input/Input";

const Search = (props) => {
  const {className} = props
  return (
    <div className={`search ${className}`}>
      <Input className='search__input' placeholder='Поиск...'/>
      <button className='search__btn'>Найти</button>
    </div>
  )
}

export default Search