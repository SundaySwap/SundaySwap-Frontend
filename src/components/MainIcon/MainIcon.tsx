import React from 'react'
import styled from 'styled-components'

import MAIN_ICON from '../../assets/img/main_icon.png'

interface MainIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const MainIcon: React.FC<MainIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <StyledIconWrapper>
    <img src={MAIN_ICON} alt="main_icon"/>
  </StyledIconWrapper>
)

const StyledIconWrapper = styled.div`
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #ebf0fa;
  box-shadow: inset -11px -11px 9px 8px rgba\(255, 255, 255, 0.47\), inset 7px 7px 8px 3px rgba\(48, 48, 48, 0.07\);

  & > img {
    width: 100%;
  }
`;

export default MainIcon
