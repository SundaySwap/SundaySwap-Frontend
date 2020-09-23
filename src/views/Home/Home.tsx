import React from 'react'
import styled from 'styled-components'
import MAIN_ICON from '../../assets/img/main_icon.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={MAIN_ICON} height={160} />}
        title="SUNDAY is Ready"
        subtitle="Earn SUNDAY tokens by staking SundaySwap V2 LP Tokens"
      />
      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        <span>💯</span>
        <b>Pro Tip:</b> SUNDAY-ETH Token pool yields TWICE more token rewards per block.
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="See the Menu" to="/farms" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin-right: 10px;
    font-size: 23px;
  }

  > b {
    margin-right: 5px;
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
