import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../../../constants/mediaQueries';

export const PhoneFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhoneFrame = styled.div`
  /* width: 360px;
  height: 760px; */
  width: 375px;
  height: 667px;
  /* background-color: darkgray; */
  box-shadow: 0px 0px 10px #FF8A00;
  border-radius: 40px;
  overflow: hidden;

  ${MEDIA_QUERIES.lg} {
    width: 412px;
    height: 915px;
  }
`;

export const Screen = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
