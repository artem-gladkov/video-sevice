import {NavLink} from "react-router-dom";
import './MovieItem.scss'

const MovieItem = (props) => {
  const {photo, title, description} = props
  return (
    <div className='movieItem'>
      <NavLink to='#' className='movieItem__link'>
        <div className="movieItem__body">
          <img src={photo} alt="Картинка" className='movieItem__img'/>
          <p className="movieItem__description">
            {description}
          </p>
        </div>
        <p className='movieItem__title'>{title}</p>
      </NavLink>
    </div>
  )
}


export default MovieItem