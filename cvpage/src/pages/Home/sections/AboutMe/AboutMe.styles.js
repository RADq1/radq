import styled, { keyframes, css} from "styled-components";
import { IoIosArrowDown } from 'react-icons/io';

import { MEDIA_QUERIES } from "../../../../constants/mediaQueries";

const OpenSectionAnim = keyframes`
    from {max-height: 200px;}
    to {max-height: 1200px;}
`;

const CloseSectionAnim = keyframes`
    from {max-height: 1200px;}
    to {max-height: 200px;}
`;

const OpenSectionAnimMobile = keyframes`
    from {max-height: 200px;}
    to {max-height: 1800px;}
`;

const CloseSectionAnimMobile = keyframes`
    from {max-height: 1800px;}
    to {max-height: 200px;}
`;

export const AboutMeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-height: 200px;
    /* background-color: #4A4848; */
    background-color: #272727;
    color: white;
    padding: 64px;
    position: relative;
    font-family: Montserrat;

    ${({ isSectionOpen }) =>
    css`
        animation: ${isSectionOpen ? OpenSectionAnimMobile : CloseSectionAnimMobile} 0.5s linear;
        max-height: ${props => props.isSectionOpen ? '1800px' : '200px'};
        overflow: hidden;
    `}

    ${MEDIA_QUERIES.md} {
        ${({ isSectionOpen }) =>
    css`
        animation: ${isSectionOpen ? OpenSectionAnim : CloseSectionAnim} 0.5s linear;
        max-height: ${props => props.isSectionOpen ? '1200px' : '200px'};
        overflow: hidden;
    `}
    }
`

export const Title = styled.span`
    font-size: 28px;
    font-family: Montserrat;
    font-weight: 700;
    letter-spacing: 8px;

    ${MEDIA_QUERIES.xxlpp} {
        font-size: 32px;
    }
`

export const DescriptionAboutMe = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    font-family: Montserrat;
    letter-spacing: 2px;
    /* overflow: hidden; */

    ${MEDIA_QUERIES.lg} {
        min-width: 800px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
    }

    ${MEDIA_QUERIES.xl} {
        font-size: 18px;
        line-height: 1.6;
    }
`
export const ReadMoreBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* background-color: #4A4848; */
    background-color: #272727;
    gap: 10px;
    position: absolute;
    bottom: 0px;
    padding: 16px;
    cursor: pointer;
    z-index: 100;
`

export const ReadMore = styled.span`
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat;
`

export const ArrowIcon = styled(IoIosArrowDown)`
    font-size: 16px;
    transition: 0.3s linear;
    transform: ${props => props.isSectionOpen ? "rotate(180deg)" : "rotate(0deg)"};
`