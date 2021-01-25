import React from 'react'
import styled from 'styled-components'

interface GameProps {
  src: string
  autoPlay?: boolean
}

export const Game = styled(({ src, autoPlay, ...styleProps }: GameProps) => {
  return (
    <div {...styleProps}>
      <snake-web-component></snake-web-component>
    </div>
  )
})`  
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
  img,
  game {
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(104, 120, 125, 0.25);
    border-radius: 10px;
    max-width: 934px;
    width: 100%;
  }`
