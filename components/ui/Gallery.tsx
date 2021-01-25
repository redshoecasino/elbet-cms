import React from 'react'
import styled from 'styled-components'

interface GalleryProps {
  src: string
  autoPlay?: boolean
}

export const Gallery = styled(({ src, autoPlay, ...styleProps }: GalleryProps) => {
  return (
    <div {...styleProps}>
      <mg-game-gallery></mg-game-gallery>
    </div>
  )
})`
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
  img,
  gallery {
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(104, 120, 125, 0.25);
    border-radius: 10px;
    max-width: 934px;
    width: 100%;
  }
`
