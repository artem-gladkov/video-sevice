import React, {useEffect} from "react";
import './ChannelsPage.scss'
import Channel from "../components/Channel/Channel";
import {connect} from 'react-redux'
import {channelsApi} from "../api/api";
import Preloader from "../components/common/Preloader/Preloader";
import {setChannels} from "../redux/channelsPageReducer";
import {getChannels} from "../redux/selectors";


const ChannelsPage = (props) => {
  const {channels, setChannels} = props

  useEffect(() => {
    //Имитация запроса на сервер для получения списка каналов
    channelsApi.getChannels().then((result) => {
      setChannels(result)
    })
  }, [setChannels])

  return (
    <div className='channelsPage'>
      {channels
        ? channels.map(channel => {
          return <Channel key={channel.id}
                          channelLogoSrc={channel.channelLogoSrc}
                          title={channel.title}
                          tvProgram={channel.tvProgram}/>
        })
        : <Preloader/>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  channels: getChannels(state)
})


export default connect(mapStateToProps, {setChannels})(ChannelsPage)
