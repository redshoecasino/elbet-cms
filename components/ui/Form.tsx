import React from 'react'
import styled from 'styled-components'

interface FormProps {
  src: string
  autoPlay?: boolean
}

export const Form = styled(({ src, autoPlay, ...styleProps }: FormProps) => {
  return (
    <div {...styleProps}>
      <signup-app></signup-app>
    </div>
  )
})``
