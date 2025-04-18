import React from 'react'
import './styles.css'

const YoutubeEmbed = ({ link }) => {
  console.log(link)
  return (
    <div className='video-responsive'>
      <iframe
        width='750'
        height='422'
        src={link}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeEmbed
