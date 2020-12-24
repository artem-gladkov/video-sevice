const SET_CHANNELS = 'channelsReducer/SET_CHANNELS'

const initialState = {
  channels: null
}

const channelsReducer = (state = initialState, action) => {
  switch (action.type){
    case (SET_CHANNELS) :
      return {
        ...state,
        channels: [...action.channels]
      }
    default :
      return state
  }
}

export const setChannels = (channels) => ({type: SET_CHANNELS, channels})



export default channelsReducer