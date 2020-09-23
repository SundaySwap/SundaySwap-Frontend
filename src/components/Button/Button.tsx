import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'

interface ButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  href?: string,
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
}) => {
  const { color, spacing } = useContext(ThemeContext)

  let buttonColor: string
  let buttonBgColor: string
  switch (variant) {
    case 'secondary':
      buttonColor = color.white
      buttonBgColor = color.blue[800]
      break
    case 'tertiary':
      buttonColor = color.blue[800]
      buttonBgColor = color.white
      break
    case 'default':
    default:
      buttonColor = color.primary.main
      buttonBgColor = color.grey[200]
  }

  let boxShadow: string
  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      boxShadow = `4px 4px 4px ${color.grey[300]}`
      buttonPadding = spacing[3]
      buttonSize = 36
      fontSize = 12
      break
    case 'md':
      boxShadow = '4px 4px 6px 0 rgba\(22, 52, 70, 0.26\)'
      buttonPadding = 12
      buttonSize = 44
      fontSize = 12
    case 'lg':
      boxShadow = `6px 6px 12px ${color.grey[300]}`
      buttonPadding = spacing[4]
      buttonSize = 72
      fontSize = 16
      break
    default:
      boxShadow = `6px 6px 12px ${color.grey[300]}`
      buttonPadding = spacing[4]
      buttonSize = 56
      fontSize = 16
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{text}</StyledExternalLink>
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <StyledButton
      boxShadow={boxShadow}
      backgroundColor={buttonBgColor}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  boxShadow: string,
  backgroundColor: string,
  color: string,
  disabled?: boolean,
  fontSize: number,
  padding: number,
  size: number
}

const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border: 0;
  border-radius: 5px;
  box-shadow: ${props => props.boxShadow};
  color: ${props => !props.disabled ? props.color : `${props.color}55`};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  height: ${props => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  width: 100%;
  transition: 0.1s ease;
  &:hover {
    background-color: ${props => props.theme.color.blue[600]};
    color: #fff;
  }
`

const StyledLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default Button