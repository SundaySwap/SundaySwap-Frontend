import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <StyledLabel>{text}</StyledLabel>
)

const StyledLabel = styled.div`
  font-family: 'Noto Sans', sans-serif;
  color: ${(props) => props.theme.color.grey[400]};
`

export default Label
