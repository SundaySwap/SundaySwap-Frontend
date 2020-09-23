import React from 'react'
import styled from 'styled-components'

interface CardContentProps {
  children: React.ReactNode
  padding?: string
}

const CardContent: React.FC<CardContentProps> = ({ children, padding }) => (
  <StyledCardContent padding={padding}>{children}</StyledCardContent>
)

interface StyledCardContentProps {
  padding: string,
}

const StyledCardContent = styled.div<StyledCardContentProps>`
  padding: ${props => props.padding ? props.padding : '20px 15px 15px'};
  height: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default CardContent
