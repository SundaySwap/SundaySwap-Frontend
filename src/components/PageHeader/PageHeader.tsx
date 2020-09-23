import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  line-height: 120px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: -18px;
`

const StyledTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 45px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.blue[800]};
  font-size: 16px;
  font-weight: 300;
  margin-top: 12px;
  padding: 0;
  text-align: center;
`

export default PageHeader
