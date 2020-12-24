import React from "react";
import './Channel.scss'

const Channel = props => {
  const {channelLogoSrc, title, tvProgram} = props

  const tvProgramElements = tvProgram.map((program, index) => {
    return (
      <div className='channel__tvProgramItem' key={index}>
        <div className='channel__tvProgramTime'>{program.time}</div>
        <p className='channel__tvProgramTitle'>{program.title}</p>
      </div>
    )
  })

  return (
    <div className='channel'>
      <div className='channel__logo'>
        <img src={channelLogoSrc} alt="Логотип канала"/>
      </div>
      <div className='channel__info'>
        <h2 className='channel__title'>{title}</h2>
        <div className='channel__tvProgram '>
          {tvProgramElements}
        </div>
      </div>
    </div>
  )
}

export default Channel