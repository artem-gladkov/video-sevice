
const initialState = {
  genres: [
    {
      id: 0,
      title: 'Комедии',
      photo: ''
    },{
      id: 1,
      title: 'Драмы',
      photo: ''
    },{
      id: 2,
      title: 'Фантастика',
      photo: ''
    },{
      id: 3,
      title: 'Ужасы',
      photo: ''
    }
    ]
}


const genresReducer = (state = initialState, action) => {
  switch (action.type){
    default :
      return state
  }
}

export default genresReducer