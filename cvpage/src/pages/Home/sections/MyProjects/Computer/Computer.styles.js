import { styled } from "styled-components";
import { MEDIA_QUERIES } from "../../../../../constants/mediaQueries";

export const ComputerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComputerFrame = styled.div`
  display: none;
  background-color: darkgray;
  box-shadow: 0px 0px 10px #FF8A00;
  border-radius: 40px;
  overflow: hidden;

  ${MEDIA_QUERIES.xxlt} {
    display: flex;
    width: 1280px;
    height: 720px;
  }

  ${MEDIA_QUERIES.xxlp}{
    display: flex;
    width: 1280px;
    height: 720px;
  }
`;

export const Screen = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
