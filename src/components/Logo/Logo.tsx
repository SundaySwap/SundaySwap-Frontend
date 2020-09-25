import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../../assets/img/logo.png'
import SUN_LOGO from '../../assets/img/sun_logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={SUN_LOGO} height="32" style={{  marginRight: 10,  marginTop: -4 }} alt="sun logo" />
      <img src={LOGO} height="32" style={{ marginTop: -4 }} alt="logo" />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;

  & > img:nth-of-type(2) {
    @media (max-width: 728px) {
      display: none;
    }
  }
`

export default Logo
