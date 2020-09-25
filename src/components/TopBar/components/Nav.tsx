import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <>
      <StyledMobileNav>
        <StyledLink exact activeClassName="active" to="/">
          HOME
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/farms">
          MENU
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/staking">
          STAKING
        </StyledLink>
        <StyledAbsoluteLink
          href=""
          target="_blank"
        >
          ABOUT
        </StyledAbsoluteLink>
      </StyledMobileNav>
      <StyledNav>
        <StyledLink exact activeClassName="active" to="/">
          HOME
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/farms">
          MENU
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/staking">
          STAKING
        </StyledLink>
        <StyledAbsoluteLink
          href=""
          target="_blank"
        >
          ABOUT
        </StyledAbsoluteLink>
      </StyledNav>
    </>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`
const StyledMobileNav = styled.nav`
  display: none;
  @media (max-width: 700px) {
    display: block; 
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  font-size: 14px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.color.blue[800]};
  }
  &.active {
    opacity: 1;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  font-size: 14px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.color.blue[800]};
  }
  &.active {
    opacity: 1;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
