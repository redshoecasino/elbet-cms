import React from 'react'
import styled from 'styled-components'

interface VideoProps {
  src: string
  autoPlay?: boolean
}

export const Video = styled(({ src, autoPlay, ...styleProps }: VideoProps) => {
  return (
    <div {...styleProps}>
{/*
      <mg-game-video
        playlist="https://c0operative.gitlab.io/cms/templates/tinacms-starter/el-bet/video/boom-pirates.mp4"
        poster="https://redshoe.gitlab.io/microgaming/microgaming-webcomponent/assets/game-img/TreasurePalace_350x350.png"
      >
      </mg-game-video>
*/}
      <video
        autoPlay={autoPlay}
        loop
        muted
        playsInline
        poster={`el-bet/img/{src}.jpg`}
      >
        <source
          src={`el-bet/video/${src}.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  )
})`
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
  img,
  video {
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(104, 120, 125, 0.25);
    border-radius: 10px;
    max-width: 934px;
    width: 100%;
  }
`
