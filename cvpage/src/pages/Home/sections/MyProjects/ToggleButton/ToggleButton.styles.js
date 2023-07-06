import styled, { keyframes } from 'styled-components';
import { LuMonitor } from 'react-icons/lu';
import { ImMobile } from 'react-icons/im';

import { MEDIA_QUERIES } from '../../../../../constants/mediaQueries';

export const ButtonContainer = styled.div`
  display: none;
  width: 300px;
  height: 40px;
  position: absolute;
  overflow: hidden;
  border-radius: 8px;
  top: 180px;
  left: 50%;
  transform: translate(-50%,-50%);
  /* transform: rotate(-90deg) translateX(-100%); */

  ${MEDIA_QUERIES.xxlt} {
    display: flex;
  }
`;

export const ButtonMobile = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: ${props => props.isMobile ? "#FF8A00" : "rgba(51,51,51,0.2)"};
  cursor: pointer;
  border: none;
  font-family: Montserrat;
  transition: 0.3s linear;

  &:hover {
      background-color: ${props => props.isMobile ? "rgba(255,138,0,0.6)" : "rgba(0,0,0,0.1)"};
  }
`;

export const ButtonComputer = styled(ButtonMobile)`
    background-color: ${props => props.isMobile ? "rgba(51,51,51,0.2)" : "#FF8A00"};
    
    &:hover {
      background-color: ${props => props.isMobile ? "rgba(0,0,0,0.1)" : "rgba(255,138,0,0.6)"};
  }
`

export const ScreenIcon = styled(LuMonitor)`
    font-size: 22px;
`

export const MobileIcon = styled(ImMobile)`
    font-size: 22px;
`